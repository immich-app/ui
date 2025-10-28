export const asSlug = (value: string) =>
  value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`).replace(/^-/, '');

export const asComponentHref = (componentName: string) => `/components/${asSlug(componentName)}`;
