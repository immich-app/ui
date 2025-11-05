import { goto } from '$app/navigation';
import { matchesShortcut, shortcuts, shouldIgnoreEvent, type Shortcut } from '$lib/actions/shortcut.js';
import CommandPaletteModal from '$lib/internal/CommandPaletteModal.svelte';
import type { MaybeArray, TranslationProps } from '$lib/types.js';
import { generateId } from '$lib/utilities/internal.js';
import { modalManager } from './modal-manager.svelte.js';

export type CommandItem = {
  icon: string;
  iconClass: string;
  type: string;
  title: string;
  description?: string;
  text: string;
  shortcuts?: MaybeArray<Shortcut>;
  shortcutOptions?: { ignoreInputFields?: boolean; preventDefault?: boolean };
} & ({ href: string } | { action: () => void | Promise<void> });

export type CommandPaletteTranslations = TranslationProps<
  'search_placeholder' | 'search_no_results' | 'search_recently_used' | 'command_palette_prompt_default'
>;

export const asText = (...items: unknown[]) => {
  return items
    .filter((item) => item !== undefined && item !== null)
    .map((items) => String(items))
    .join('|')
    .toLowerCase();
};

type ContextLayer = {
  items: Array<CommandItem & { id: string }>;
  recentItems: Array<CommandItem & { id: string }>;
};

const isMatch = (item: CommandItem, query: string): boolean => {
  if (!query) {
    return true;
  }

  return item.text.includes(query);
};

class CommandPaletteManager {
  query = $state('');
  selectedIndex = $state(0);

  #isEnabled = $state(false);
  #normalizedQuery = $derived(this.query.toLowerCase());
  #modal?: { close: () => Promise<void> };
  #translations: CommandPaletteTranslations = {};
  #isOpen: boolean = false;

  #globalLayer = $state<ContextLayer>({ items: [], recentItems: [] });
  #layers = $state<ContextLayer[]>([{ items: [], recentItems: [] }]);

  items = $derived([...this.#globalLayer.items, ...this.#layers.at(-1)!.items]);
  filteredItems = $derived(this.items.filter((item) => isMatch(item, this.#normalizedQuery)).slice(0, 100));
  recentItems = $derived([...this.#globalLayer.recentItems, ...this.#layers.at(-1)!.recentItems]);

  results = $derived(this.query ? this.filteredItems : this.recentItems);

  get isEnabled() {
    return this.#isEnabled;
  }

  enable() {
    if (this.#isEnabled) {
      return;
    }
    this.#isEnabled = true;

    if (globalThis.window && document.body) {
      shortcuts(document.body, [
        { shortcut: { key: 'k', meta: true }, onShortcut: () => this.open() },
        { shortcut: { key: 'k', ctrl: true }, onShortcut: () => this.open() },
        { shortcut: { key: '/' }, preventDefault: true, onShortcut: () => this.open() },
      ]);
      document.body.addEventListener('keydown', (event) => this.#handleKeydown(event));
    }
  }

  async #handleKeydown(event: KeyboardEvent) {
    const command = this.items.find(({ shortcuts }) => {
      if (!shortcuts) {
        return;
      }

      if (shortcuts)
        return Array.isArray(shortcuts)
          ? shortcuts.some((shortcut) => matchesShortcut(event, shortcut))
          : matchesShortcut(event, shortcuts);
    });

    if (!command) {
      return;
    }

    const { ignoreInputFields = true, preventDefault = true } = command.shortcutOptions ?? {};

    if (ignoreInputFields && shouldIgnoreEvent(event)) {
      return;
    }

    if (preventDefault) {
      event.preventDefault();
    }

    await this.#executeCommand(command);
  }

  async #executeCommand(command: CommandItem) {
    if ('href' in command) {
      if (!command.href.startsWith('/')) {
        window.open(command.href, '_blank');
      } else {
        await goto(command.href);
      }
    } else {
      await command.action();
    }
  }

  setTranslations(translations: CommandPaletteTranslations = {}) {
    this.#translations = translations;
  }

  pushContextLayer() {
    if (!this.#isEnabled) {
      return;
    }

    // we do not want the command palette to have its own context layer
    if (this.#isOpen) {
      return;
    }

    this.#layers.push({ items: [], recentItems: [] });

    return () => this.popContextLayer();
  }

  popContextLayer() {
    if (this.#layers.length > 1) {
      this.#layers = this.#layers.slice(0, -1);
    }
  }

  open() {
    if (this.#modal || !this.#isEnabled) {
      return;
    }

    this.selectedIndex = 0;
    this.#isOpen = true;
    const { close, onClose } = modalManager.open(CommandPaletteModal, { translations: this.#translations });
    this.#modal = { close };
    void onClose.then(() => this.#onClose());
  }

  close() {
    if (!this.#modal) {
      return;
    }

    return this.#modal.close();
  }

  #onClose() {
    this.query = '';
    this.#modal = undefined;
    this.#isOpen = false;
  }

  async select(selectedIndex?: number) {
    const selected = this.results[selectedIndex ?? this.selectedIndex];
    if (!selected) {
      return;
    }

    // no duplicates
    this.recentItems = this.recentItems.filter(({ id }) => id !== selected.id);
    this.recentItems.unshift(selected);
    this.recentItems = this.recentItems.slice(0, 5);

    await this.#executeCommand(selected);

    await this.close();
  }

  remove(index: number) {
    this.recentItems.splice(index, 1);
  }

  up() {
    this.selectedIndex = (this.selectedIndex - 1 + this.results.length) % (this.results.length || 1);
  }

  down() {
    this.selectedIndex = (this.selectedIndex + 1) % (this.results.length || 1);
  }

  reset() {
    this.#layers = [{ items: [], recentItems: [] }];
    this.#globalLayer = { items: [], recentItems: [] };
    this.query = '';
  }

  addCommands(itemOrItems: MaybeArray<CommandItem & { id?: string }>, options: { global?: boolean } = {}) {
    const items = Array.isArray(itemOrItems) ? itemOrItems : [itemOrItems];
    const itemsWithId = items.map((item) => ({ ...item, id: item.id ?? generateId() }));

    if (options.global) {
      this.#globalLayer.items.push(...itemsWithId);
    } else {
      this.#layers.at(-1)!.items.push(...itemsWithId);
    }

    return () => this.removeCommands(itemsWithId);
  }

  #removeCommands(layer: ContextLayer, ids: Record<string, boolean>): ContextLayer {
    return {
      items: layer.items.filter(({ id }) => !ids[id]),
      recentItems: layer.recentItems.filter(({ id }) => !ids[id]),
    };
  }

  removeCommands(itemOrItems: MaybeArray<{ id: string }>) {
    const items = Array.isArray(itemOrItems) ? itemOrItems : [itemOrItems];
    const ids = items.reduce<Record<string, true>>((acc, { id }) => ({ ...acc, [id]: true }), {});

    this.#layers = this.#layers.map((layer) => this.#removeCommands(layer, ids));
    this.#globalLayer = this.#removeCommands(this.#globalLayer, ids);
  }
}

export const commandPaletteManager = new CommandPaletteManager();
