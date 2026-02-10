let locale = $state<string>();

export const getLocale = () => locale;
export const setLocale = (newLocale: string) => {
  locale = newLocale;
}
