import { browser } from '$app/environment';
import { preference } from '$lib/services/preference.svelte.js';
import { Theme } from '$lib/types.js';

export type ThemeOptions = {
  lightClass?: string;
  darkClass?: string;
  selector?: string;
};

const defaultOptions: ThemeOptions = {
  darkClass: 'dark',
  selector: 'body',
};

let options: ThemeOptions = defaultOptions;

export const setThemeOptions = (newOptions: ThemeOptions) =>
  (options = { ...defaultOptions, ...newOptions });

type ThemePreference = { value: Theme };
const defaultTheme: ThemePreference = { value: Theme.Dark };
const { state, sync: syncToLocalStorage } = preference<ThemePreference>({
  key: 'theme',
  defaults: defaultTheme,
  onReadError: (error) => console.log(`Preference read error: ${error}`),
  onWriteError: (error) => console.log(`Preference write error: ${error}`),
});

export const theme = state;

export const onThemeChange = () => {
  syncToDom();
  syncToLocalStorage();
};

const syncToDom = () => {
  const { lightClass, darkClass, selector } = options;
  if (!browser || !selector) {
    return;
  }

  const element = document.querySelector(selector);
  if (!element) {
    return;
  }

  switch (theme.value) {
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
};

export const toggleTheme = () => {
  theme.value = theme.value === Theme.Dark ? Theme.Light : Theme.Dark;
  onThemeChange();
};

export const initializeTheme = (options?: ThemeOptions) => {
  if (options) {
    setThemeOptions(options);
  }

  syncToDom();
};
