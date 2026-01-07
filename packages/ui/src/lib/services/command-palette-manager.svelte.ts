import { matchesShortcut, shortcuts, shouldIgnoreEvent } from '$lib/actions/shortcut.js';
import CommandPaletteModal from '$lib/internal/CommandPaletteModal.svelte';
import { modalManager } from '$lib/services/modal-manager.svelte.js';
import type { ActionItem, MaybePromise, TranslationProps } from '$lib/types.js';
import { asArray, generateId, getSearchString, isEnabled } from '$lib/utilities/internal.js';

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

export type ActionProvider = {
  name: string;
  onSearch: (query?: string) => MaybePromise<ActionItem[]>;
};

export const defaultProvider = ({ name, actions }: { name: string; actions: ActionItem[] }) => ({
  name,
  onSearch: (query?: string) =>
    query ? actions.filter((action) => getSearchString(action).includes(query.toLowerCase())) : actions,
});

class CommandPaletteManager {
  #translations: CommandPaletteTranslations = {};
  #providers: ActionProvider[] = [];
  #isEnabled = false;
  #isOpen = false;
  #items: Array<ActionItem & { id: string }> = $state([]);

  get isEnabled() {
    return this.#isEnabled;
  }

  get items() {
    return this.#items;
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

  setTranslations(translations: CommandPaletteTranslations = {}) {
    this.#translations = translations;
  }

  async #onSearch(query?: string) {
    const newItems = await Promise.all(this.#providers.map((provider) => Promise.resolve(provider.onSearch(query))));
    this.#items = newItems
      .flat()
      .filter((item) => isEnabled(item))
      .map((item) => ({ ...item, id: generateId() }));
  }

  queryUpdate(query: string) {
    if (!query) {
      this.#items = [];
      return;
    }
    void this.#onSearch(query);
  }

  async #handleKeydown(event: KeyboardEvent) {
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
    }
  }

  async #onClose(action?: ActionItem) {
    await action?.onAction(action);
    this.#isOpen = false;
    this.#items = [];
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
