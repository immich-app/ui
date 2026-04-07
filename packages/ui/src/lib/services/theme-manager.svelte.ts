import { browser } from '$app/environment';
import { PersistedLocalStorage } from '$lib/state/persisted.js';
import { Theme } from '$lib/types.js';

export type ThemeOptions = {
  lightClass?: string;
  darkClass?: string;
  selector?: string;
};

const DEFAULT_OPTIONS: ThemeOptions = Object.freeze({
  lightClass: 'light',
  darkClass: 'dark',
  selector: 'html',
});

class ThemeManager {
  #theme = new PersistedLocalStorage<Theme>('immich-ui-theme', Theme.Dark, {
    upgrade: (value: unknown) => {
      if (value && typeof value === 'object' && 'value' in value) {
        value = value.value;
      }

      if (value === 'light' || value === 'dark') {
        return value as Theme;
      }

      return Theme.Dark;
    },
  });
  #options = $state<ThemeOptions>({ ...DEFAULT_OPTIONS });

  get value() {
    return this.#theme.current;
  }

  initialize(options?: ThemeOptions) {
    if (options) {
      this.setOptions(options);
    }

    this.#syncToDom();
  }

  setOptions(newOptions: ThemeOptions) {
    this.#options = { ...DEFAULT_OPTIONS, ...newOptions };
    this.#onChange();
  }

  toggle() {
    this.#theme.current = this.#theme.current === Theme.Dark ? Theme.Light : Theme.Dark;
    this.#onChange();
  }

  #onChange() {
    this.#syncToDom();
  }

  #syncToDom() {
    const { lightClass, darkClass, selector } = this.#options;
    if (!browser || !selector) {
      return;
    }

    const element = document.querySelector(selector);
    if (!element) {
      return;
    }

    switch (this.#theme.current) {
      case Theme.Dark: {
        if (lightClass) {
          element.classList.remove(lightClass);
        }

        if (darkClass) {
          element.classList.add(darkClass);
        }

        const darkReaderLock = document.createElement('meta');
        darkReaderLock.name = 'darkreader-lock';
        document.head.appendChild(darkReaderLock);

        break;
      }

      case Theme.Light: {
        if (lightClass) {
          element.classList.add(lightClass);
        }

        if (darkClass) {
          element.classList.remove(darkClass);
        }

        const darkReaderLock = document.querySelector('head > meta[name=darkreader-lock]');
        if (darkReaderLock) {
          document.head.removeChild(darkReaderLock);
        }

        break;
      }
    }
  }
}

export const themeManager = new ThemeManager();
