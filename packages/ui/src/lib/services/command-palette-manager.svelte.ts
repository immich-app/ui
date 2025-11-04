import { goto } from '$app/navigation';
import CommandPaletteModal from '$lib/internal/CommandPaletteModal.svelte';
import type { TranslationProps } from '$lib/types.js';
import { modalManager } from './modal-manager.svelte.js';

export type CommandItem = {
  icon: string;
  iconClass: string;
  type: string;
  title: string;
  description?: string;
  text: string;
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

const isEqual = (a: CommandItem, b: CommandItem) => {
  return a.title === b.title && a.type === b.type;
};

const isMatch = (item: CommandItem, query: string): boolean => {
  if (!query) {
    return true;
  }

  return item.text.includes(query);
};

class CommandPaletteManager {
  isEnabled = $state(false);
  query = $state('');
  selectedIndex = $state(0);
  #normalizedQuery = $derived(this.query.toLowerCase());
  #modal?: { close: () => Promise<void> };
  #translations: CommandPaletteTranslations = {};

  items: CommandItem[] = [];
  filteredItems = $derived(this.items.filter((item) => isMatch(item, this.#normalizedQuery)).slice(0, 100));
  recentItems = $state<CommandItem[]>([]);
  results = $derived(this.query ? this.filteredItems : this.recentItems);

  enable() {
    this.isEnabled = true;
  }

  setTranslations(translations: CommandPaletteTranslations = {}) {
    this.#translations = translations;
  }

  async open() {
    if (!this.isEnabled) {
      return;
    }

    this.selectedIndex = 0;
    const { close, onClose } = modalManager.open(CommandPaletteModal, { translations: this.#translations });
    this.#modal = { close };
    void onClose.then(() => this.handleClose());
  }

  close() {
    if (!this.#modal) {
      return;
    }

    return this.#modal.close();
  }

  handleClose() {
    this.query = '';
  }

  async select(selectedIndex?: number) {
    const selected = this.results[selectedIndex ?? this.selectedIndex];
    if (!selected) {
      return;
    }

    // no duplicates
    this.recentItems = this.recentItems.filter((item) => !isEqual(item, selected));
    this.recentItems.unshift(selected);
    this.recentItems = this.recentItems.slice(0, 5);

    if ('href' in selected) {
      if (!selected.href.startsWith('/')) {
        window.open(selected.href, '_blank');
      } else {
        await goto(selected.href);
      }
    } else {
      await selected.action();
    }

    await this.close();
  }

  remove(index: number) {
    this.recentItems.splice(index, 1);
  }

  up() {
    this.selectedIndex = (this.selectedIndex - 1 + this.results.length) % this.results.length;
  }

  down() {
    this.selectedIndex = (this.selectedIndex + 1) % this.results.length;
  }

  reset() {
    this.items = [];
    this.query = '';
  }

  addCommands(itemOrItems: CommandItem | CommandItem[]) {
    const items = Array.isArray(itemOrItems) ? itemOrItems : [itemOrItems];
    this.items.push(...items);
  }

  removeCommands(itemOrItems: CommandItem | CommandItem[]) {
    const items = Array.isArray(itemOrItems) ? itemOrItems : [itemOrItems];
    for (const remoteItem of items) {
      this.items = this.items.filter((item) => !isEqual(item, remoteItem));
    }
  }
}

export const commandPaletteManager = new CommandPaletteManager();
