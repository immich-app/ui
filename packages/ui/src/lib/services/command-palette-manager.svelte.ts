import { matchesShortcut, shortcuts, shouldIgnoreEvent } from '$lib/actions/shortcut.js';
import CommandPaletteModal from '$lib/internal/CommandPaletteModal.svelte';
import type { ActionItem, ActionProvider, TranslationProps } from '$lib/types.js';
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

class CommandPaletteManager {
  #isEnabled = false;
  #modal?: { close: () => Promise<void> };
  #providers: ActionProvider[] = [];
  #translations: CommandPaletteTranslations = {};

  get isEnabled() {
    return this.#isEnabled;
  }

  registerProviders(providerOrProviders: ActionProvider | ActionProvider[]) {
    const providers = Array.isArray(providerOrProviders) ? providerOrProviders : [providerOrProviders];
    this.#providers.push(...providers);

    return () => {
      for (const provider of providers) {
        this.#providers = this.#providers.filter((item) => item !== provider);
      }
    };
  }

  setTranslations(translations: CommandPaletteTranslations = {}) {
    this.#translations = translations;
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
    let command;

    for (const provider of this.#providers) {
      const items = await provider.onSearch();
      for (const item of items) {
        if (!item.shortcuts) {
          continue;
        }

        if (
          Array.isArray(item.shortcuts)
            ? item.shortcuts.some((shortcut) => matchesShortcut(event, shortcut))
            : matchesShortcut(event, item.shortcuts)
        ) {
          command = item;
          break;
        }
      }
    }

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

  open({ query }: { query?: string } = {}) {
    if (this.#modal) {
      return;
    }

    const { close, onClose } = modalManager.open(CommandPaletteModal, {
      query,
      providers: this.#providers,
      translations: this.#translations,
    });

    this.#modal = { close };
    void onClose.then((action) => this.#onClose(action));
  }

  close() {
    if (!this.#modal) {
      return;
    }

    return this.#modal.close();
  }

  async #onClose(action?: ActionItem) {
    this.#modal = undefined;

    await this.close();

    if (action) {
      await action.onAction(action);
    }
  }
}

export const commandPaletteManager = new CommandPaletteManager();
