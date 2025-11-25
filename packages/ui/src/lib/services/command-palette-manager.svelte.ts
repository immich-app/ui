import { matchesShortcut, shortcuts, shouldIgnoreEvent } from '$lib/actions/shortcut.js';
import CommandPaletteModal from '$lib/internal/CommandPaletteModal.svelte';
import type { ActionItem, MaybeArray, TranslationProps } from '$lib/types.js';
import { generateId, isEnabled } from '$lib/utilities/internal.js';
import { modalManager } from './modal-manager.svelte.js';

export type CommandPaletteTranslations = TranslationProps<
  | 'search_placeholder'
  | 'search_no_results'
  | 'search_recently_used'
  | 'command_palette_prompt_default'
  | 'command_palette_to_select'
  | 'command_palette_to_close'
  | 'command_palette_to_navigate'
  | 'command_palette_to_show_all'
  | 'global'
>;

export const asText = (...items: unknown[]) => {
  return items
    .filter((item) => item !== undefined && item !== null)
    .map((items) => String(items))
    .join('|')
    .toLowerCase();
};

type ContextLayer = {
  items: Array<ActionItem & { id: string }>;
  recentItems: Array<ActionItem & { id: string }>;
};

const isMatch = (
  { title, description, type, searchText = asText(title, description, type) }: ActionItem,
  query: string,
): boolean => {
  if (!query) {
    return true;
  }

  return searchText.includes(query);
};

class CommandPaletteManager {
  #query = $state('');
  selectedIndex = $state(0);

  #isEnabled = $state(false);
  #normalizedQuery = $derived(this.#query.toLowerCase());
  #modal?: { close: () => Promise<void> };
  #translations: CommandPaletteTranslations = {};
  #isOpen: boolean = false;
  #isShowAll: boolean = $state(false);

  #globalLayer = $state<ContextLayer>({ items: [], recentItems: [] });
  #layers = $state<ContextLayer[]>([{ items: [], recentItems: [] }]);

  items = $derived([...this.#globalLayer.items, ...this.#layers.at(-1)!.items].filter(isEnabled));
  filteredItems = $derived(this.items.filter((item) => isMatch(item, this.#normalizedQuery)).slice(0, 100));
  recentItems = $derived([...this.#globalLayer.recentItems, ...this.#layers.at(-1)!.recentItems].filter(isEnabled));

  results = $derived(this.#isShowAll ? this.items : this.#query ? this.filteredItems : this.recentItems);

  #isEmpty = $derived(!this.#isShowAll && !this.#query && this.results.length === 0);

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

  get query() {
    return this.#query;
  }

  set query(query: string) {
    this.#query = query;

    if (this.#isShowAll && query) {
      this.#isShowAll = false;
    }
  }

  get isShowAll() {
    return this.#isShowAll;
  }

  get isEmpty() {
    return this.#isEmpty;
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

    await command.onAction(command);
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
    this.#query = '';
    this.#modal = undefined;
    this.#isOpen = false;
    this.#isShowAll = false;
  }

  async select(selectedIndex?: number) {
    const selected = this.results[selectedIndex ?? this.selectedIndex];
    if (!selected) {
      return;
    }

    if (selected.isGlobal) {
      this.#globalLayer.recentItems = this.#globalLayer.recentItems.filter(({ id }) => id !== selected.id);
      this.#globalLayer.recentItems.unshift(selected);
    } else {
      this.#layers.at(-1)!.recentItems = this.#layers.at(-1)!.recentItems.filter(({ id }) => id !== selected.id);
      this.#layers.at(-1)?.recentItems.unshift(selected);
    }

    await selected.onAction(selected);

    await this.close();
  }

  remove(index: number) {
    const item = this.recentItems.at(index);

    if (!item) {
      return;
    }

    this.#globalLayer.recentItems = this.#globalLayer.recentItems.filter(({ id }) => id !== item.id);
    this.#layers.at(-1)!.recentItems = this.#layers.at(-1)!.recentItems.filter(({ id }) => id !== item.id);
  }

  up() {
    this.selectedIndex = (this.selectedIndex - 1 + this.results.length) % (this.results.length || 1);
  }

  down() {
    if (this.#isEmpty) {
      this.#isShowAll = true;
      return;
    }

    this.selectedIndex = (this.selectedIndex + 1) % (this.results.length || 1);
  }

  reset() {
    this.#layers = [{ items: [], recentItems: [] }];
    this.#globalLayer = { items: [], recentItems: [] };
    this.#query = '';
  }

  addCommands(itemOrItems: MaybeArray<ActionItem>) {
    const items = Array.isArray(itemOrItems) ? itemOrItems : [itemOrItems];
    const itemsWithId = items.map((item) => ({
      ...item,
      id: generateId(),
    }));
    const globalItems = itemsWithId.filter(({ isGlobal }) => isGlobal);
    const localItems = itemsWithId.filter(({ isGlobal }) => !isGlobal);

    this.#globalLayer.items.push(...globalItems);
    this.#layers.at(-1)!.items.push(...localItems);

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
