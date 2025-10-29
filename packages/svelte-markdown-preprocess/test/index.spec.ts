import { basename } from 'node:path';
import { describe, expect, it } from 'vitest';
import { svelteMarkdownPreprocess } from '../src/index.js';

const fixtureMap: Record<string, { default: string }> = import.meta.glob('./fixtures/*.md', {
  query: '?raw',
  eager: true,
});
const fixtures = Object.entries(fixtureMap).map(([filepath, { default: content }]) => ({
  filename: basename(filepath),
  filepath,
  content,
}));

describe('markup', () => {
  it.each(fixtures)('should render $filename correctly', async ({ filename, content }) => {
    const sut = svelteMarkdownPreprocess({});
    const output = await sut.markup({ content, filename });
    expect(output).toMatchSnapshot();
  });
});
