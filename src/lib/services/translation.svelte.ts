import type { TranslationProps } from '$lib/types.js';

const defaultTranslations = {
	close: 'Close',
	show_password: 'Show password',
	hide_password: 'Hide password',
	dark_theme: 'Toggle dark theme',
	confirm: 'Confirm',
	prompt_default: 'Are you sure you want to do this?',
	cancel: 'Cancel',
};

export type Translations = typeof defaultTranslations;

let translations = $state<Translations>(defaultTranslations);

export const translate = <T extends keyof Translations>(
	key: T,
	overrides?: TranslationProps<T>,
): string => overrides?.[key] ?? translations[key];
export const t = translate;
export const setTranslations = (newTranslations: Partial<Translations>) => {
	translations = { ...defaultTranslations, ...newTranslations };
};
