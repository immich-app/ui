import { browser } from '$app/environment';

export enum Font {
  Immich = 'immich',
  System = 'system',
}

const STORAGE_KEY = 'immich-ui-font';

const readFont = (): Font => {
  if (!browser) {
    return Font.Immich;
  }
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === Font.System) {
    return Font.System;
  }
  return Font.Immich;
};

const writeFont = (value: Font) => {
  if (!browser) {
    return;
  }
  localStorage.setItem(STORAGE_KEY, value);
};

const syncToDom = (value: Font) => {
  if (!browser) {
    return;
  }

  const element = document.body;
  if (!element) {
    return;
  }

  // Use class-based approach for persistence
  element.classList.remove('font-immich', 'font-system');
  element.classList.add(value === Font.System ? 'font-system' : 'font-immich');
};

export const uiFont = $state<Font>(readFont());

export const setFont = (newFont: Font) => {
  writeFont(newFont);
  syncToDom(newFont);
};

export const initializeFont = () => {
  syncToDom(readFont());
};
