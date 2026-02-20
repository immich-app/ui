import { matchesShortcut, shortcuts, shouldIgnoreEvent } from '$lib/actions/shortcut.js';
import CommandPaletteModal from '$lib/internal/CommandPaletteModal.svelte';
import { modalManager } from '$lib/services/modal-manager.svelte.js';
import { isModalOpen } from '$lib/state/modal-state.svelte.js';
import type { ActionItem, MaybePromise, TranslationProps } from '$lib/types.js';
import { isEnabled } from '$lib/utilities/common.js';
import { asArray, generateId, getSearchString } from '$lib/utilities/internal.js';
import { on } from 'svelte/events';

export type CommandPaletteTranslations = TranslationProps<
  | 'search_placeholder'
  | 'search_no_results'
  | 'command_palette_prompt_default'
  | 'command_palette_to_select'
  | 'command_palette_to_close'
  | 'command_palette_to_navigate'
  | 'command_palette_to_show_all'
>;

export type ActionProvider = {
  name?: string;
  onSearch: (query?: string) => MaybePromise<ActionItem[]>;
};

export const defaultProvider = ({ name, actions }: { name?: string; actions: ActionItem[] }) => ({
  name,
  onSearch: (query?: string) =>
    query ? actions.filter((action) => getSearchString(action).includes(query.toLowerCase())) : actions,
});

class CommandPaletteManager {
  #translations: CommandPaletteTranslations = {};
  #providers: ActionProvider[] = [];
  #isEnabled = false;
  #isOpen = false;
  #results: Array<{ provider: ActionProvider; items: Array<ActionItem & { id: string }> }> = $state([]);
  #selectedGroupIndex = $state(0);
  #selectedItemIndex = $state(0);

  get isEnabled() {
    return this.#isEnabled;
  }

  get results() {
    return this.#results;
  }

  get selectedItem() {
    const group = this.#results[this.#selectedGroupIndex];
    return group?.items[this.#selectedItemIndex];
  }

  isSelected(item: { id: string }) {
    return this.selectedItem?.id === item.id;
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
      on(document.body, 'keydown', (event) => this.#handleKeydown(event));
    }
  }

  setTranslations(translations: CommandPaletteTranslations = {}) {
    this.#translations = translations;
  }

  async #onSearch(query?: string) {
    const newResults = await Promise.all(
      this.#providers.map(async (provider) => {
        const items = await provider.onSearch(query);

        return {
          provider,
          items: items.filter((item) => isEnabled(item)).map((item) => ({ ...item, id: generateId() })),
        };
      }),
    );

    this.#selectedGroupIndex = 0;
    this.#selectedItemIndex = 0;
    this.#results = newResults.filter((result) => result.items.length > 0);
  }

  queryUpdate(query: string) {
    if (!query) {
      this.#results = [];
      return;
    }
    void this.#onSearch(query);
  }

  async #handleKeydown(event: KeyboardEvent) {
    if (event.defaultPrevented || isModalOpen()) {
      return;
    }

    const actions = await Promise.all(this.#providers.map((provider) => Promise.resolve(provider.onSearch())));

    for (const action of actions.flat()) {
      if (!asArray(action.shortcuts).some((shortcut) => matchesShortcut(event, shortcut))) {
        continue;
      }

      if (!isEnabled(action)) {
        continue;
      }

      const { ignoreInputFields = true, preventDefault = true } = action.shortcutOptions || {};
      if (ignoreInputFields && shouldIgnoreEvent(event)) {
        continue;
      }

      if (preventDefault) {
        event.preventDefault();
      }

      action?.onAction(action);
      return;
    }
  }

  async #onClose(action?: ActionItem) {
    await action?.onAction(action);
    this.#isOpen = false;
    this.#results = [];
  }

  open(initialQuery?: string) {
    if (this.#isOpen) {
      return;
    }

    const { onClose } = modalManager.open(CommandPaletteModal, {
      translations: this.#translations,
      initialQuery,
    });
    this.#isOpen = true;
    void onClose.then((action) => this.#onClose(action));
  }

  navigateUp() {
    const groups = this.#results;
    if (groups.length === 0) {
      return;
    }

    this.#selectedItemIndex--;

    if (this.#selectedItemIndex < 0) {
      this.#selectedGroupIndex--; // previous group
      if (this.#selectedGroupIndex < 0) {
        this.#selectedGroupIndex = groups.length - 1; // first group
      }
      this.#selectedItemIndex = groups[this.#selectedGroupIndex].items.length - 1;
    }
  }

  navigateDown() {
    const groups = this.#results;
    if (groups.length === 0) {
      return;
    }
    const group = groups[this.#selectedGroupIndex];

    this.#selectedItemIndex++;

    if (this.#selectedItemIndex >= group.items.length) {
      this.#selectedItemIndex = 0;
      this.#selectedGroupIndex++; // next group
      if (this.#selectedGroupIndex >= groups.length) {
        this.#selectedGroupIndex = 0; // first group
      }
    }
  }

  loadAllItems() {
    void this.#onSearch();
  }

  addProvider(provider: ActionProvider) {
    this.#providers.push(provider);

    return () => this.#removeProvider(provider);
  }

  #removeProvider(provider: ActionProvider) {
    this.#providers = this.#providers.filter((actionProvider) => actionProvider !== provider);
  }
}

export const commandPaletteManager = new CommandPaletteManager();
