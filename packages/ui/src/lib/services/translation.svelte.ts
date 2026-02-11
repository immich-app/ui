import type { TranslationProps } from '$lib/types.js';

const defaultTranslations = {
  // common
  cancel: 'Cancel',
  close: 'Close',
  confirm: 'Confirm',
  expand: 'Expand',
  collapse: 'Collapse',

  // code
  code_copy: 'Copy',
  code_copied: 'Copied',

  // search
  search_placeholder: 'Search...',
  search_no_results: 'No results',

  // modal
  prompt_default: 'Are you sure you want to do this?',

  // password input
  show_password: 'Show password',
  hide_password: 'Hide password',

  // theme switcher
  dark_theme: 'Toggle dark theme',

  // context menu
  open_menu: 'Open menu',

  // command palette
  command_palette_prompt_default: 'Quickly find pages, actions, or commands',
  command_palette_to_select: 'to select',
  command_palette_to_navigate: 'to navigate',
  command_palette_to_close: 'to close',
  command_palette_to_show_all: 'to show all',

  // navigation
  navigate_next: 'Next',
  navigate_previous: 'Previous',

  // date picker
  open_calendar: 'Open calendar',

  toast_success_title: 'Success',
  toast_info_title: 'Info',
  toast_warning_title: 'Warning',
  toast_danger_title: 'Error',

  save: 'Save',

  supporter: 'Supporter',
};

export type Translations = typeof defaultTranslations;

let translations = $state<Translations>(defaultTranslations);

export const translate = <T extends keyof Translations>(key: T, overrides?: TranslationProps<T>): string =>
  overrides?.[key] ?? translations[key];
export const t = translate;
export const setTranslations = (newTranslations: Partial<Translations>) => {
  translations = { ...defaultTranslations, ...newTranslations };
};
