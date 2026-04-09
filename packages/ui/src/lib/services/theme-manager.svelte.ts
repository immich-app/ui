import { browser } from '$app/environment';
import { PersistedLocalStorage } from '$lib/state/persisted.js';
import { Theme, ThemePreference } from '$lib/types.js';
import { MediaQuery } from 'svelte/reactivity';

const LIGHT_CLASS = 'light';
const DARK_CLASS = 'dark';
const DARK_READER_LOCK_NAME = 'darkreader-lock';

class ThemeManager {
  #darkModeUser = new MediaQuery('(prefers-color-scheme: dark)');
  #theme = new PersistedLocalStorage<ThemePreference>('immich-ui-theme', ThemePreference.System, {
    upgrade: (
      value:
        | string // default
        | { value: string; system?: boolean }, // immich
    ) => {
      if (typeof value === 'object' && value.system) {
        if (value.system) {
          return ThemePreference.System;
        }

        if (value.value) {
          value = value.value;
        }
      }

      if (typeof value === 'string' && Object.values(ThemePreference).includes(value as ThemePreference)) {
        return value as ThemePreference;
      }

      return ThemePreference.System;
    },
  });

  get prefersDark() {
    return this.#darkModeUser.current;
  }

  get value() {
    switch (this.#theme.current) {
      case ThemePreference.System: {
        return this.#darkModeUser.current ? Theme.Dark : Theme.Light;
      }

      case ThemePreference.Light: {
        return Theme.Light;
      }

      default: {
        return Theme.Dark;
      }
    }
  }

  constructor() {
    if (!browser) {
      return;
    }

    globalThis
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', () => this.#syncToDom(), { passive: true });
  }

  toggle() {
    this.#theme.current = this.value === Theme.Dark ? ThemePreference.Light : ThemePreference.Dark;
    this.#syncToDom();
  }

  setPreference(preference: ThemePreference) {
    this.#theme.current = preference;
    this.#syncToDom();
  }

  #syncToDom() {
    if (!browser) {
      return;
    }

    const element = document.querySelector('html');
    if (!element) {
      return;
    }

    switch (this.value) {
      case Theme.Dark: {
        element.classList.remove(LIGHT_CLASS);
        element.classList.add(DARK_CLASS);
        const lockRef = document.createElement('meta');
        lockRef.name = DARK_READER_LOCK_NAME;
        document.head.appendChild(lockRef);
        break;
      }

      case Theme.Light: {
        element.classList.add(LIGHT_CLASS);
        element.classList.remove(DARK_CLASS);
        const lockRef = document.querySelector(`head > meta[name=${DARK_READER_LOCK_NAME}]`);
        if (lockRef) {
          document.head.removeChild(lockRef);
        }

        break;
      }
    }
  }
}

export const themeManager = new ThemeManager();
