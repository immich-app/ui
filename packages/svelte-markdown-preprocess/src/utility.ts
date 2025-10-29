export const getIdFromText = (text: string) => {
  let id = text
    .toLowerCase()
    .replace(/<[^>]*>/g, '')
    .replace(/[^a-z1-9 ]/g, '')
    .replace(/\s+/g, '-');

  if (id.endsWith('-')) {
    id = id.slice(0, -1);
  }

  return id;
};

export const escapeSvelteCode = (text: string) => {
  let escaped = text;

  for (const char of ['{', '}', '`']) {
    escaped = escaped.replaceAll(char, `\\${char}`);
  }

  return escaped;
};
