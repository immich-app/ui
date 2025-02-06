import type { TranslationProps } from '$lib/types.js';

const defaultTranslations = {
	close: 'Close',
	showPassword: 'Show password',
	hidePassword: 'Hide password',
	darkTheme: 'Toggle dark theme',
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
