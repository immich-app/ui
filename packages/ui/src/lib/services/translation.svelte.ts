import type { TranslationProps } from '$lib/types.js';

const defaultTranslations = {
  // common
  cancel: 'Cancel',
  close: 'Close',
  confirm: 'Confirm',

  // code
  code_copy: 'Copy',
  code_copied: 'Copied',

  // search
  search_placeholder: 'Search...',
  search_no_results: 'No results',
  search_recently_used: 'Recently used',

  // modal
  prompt_default: 'Are you sure you want to do this?',

  // password input
  show_password: 'Show password',
  hide_password: 'Hide password',

  // theme switcher
  dark_theme: 'Toggle dark theme',

  // command palette
  command_palette_prompt_default: 'Quickly find pages, actions, or commands',

  toast_success_title: 'Success',
  toast_info_title: 'Info',
  toast_warning_title: 'Warning',
  toast_danger_title: 'Error',

  save: 'Save',
};

export type Translations = typeof defaultTranslations;

let translations = $state<Translations>(defaultTranslations);

export const translate = <T extends keyof Translations>(key: T, overrides?: TranslationProps<T>): string =>
  overrides?.[key] ?? translations[key];
export const t = translate;
export const setTranslations = (newTranslations: Partial<Translations>) => {
  translations = { ...defaultTranslations, ...newTranslations };
};
