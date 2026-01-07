import { isEnabled, isExternalLink, resolveMetadata, resolveUrl } from '$lib/utilities/common.js';
import { DateTime } from 'luxon';
import { beforeAll, describe, expect, it } from 'vitest';

describe('isExternalLink', () => {
  beforeAll(() => {
    Object.defineProperty(globalThis, 'location', {
      value: {
        href: 'http://localhost/',
        origin: 'http://localhost',
        hostname: 'localhost',
      },
      configurable: true,
    });
  });

  const tests = [
    { url: 'https://immich.app/test', result: true },
    { url: 'http://immich.app/test', result: true },
    { url: 'http://localhost/test', result: false },
    { url: 'http://localhost:1234/test', result: true },
    { url: 'mailto://something', result: true },
    { url: 'app.immich://', result: true },
    { url: '/testing', result: false },
    { url: '#testing', result: false },
    { url: 'http://localhost/folders', result: false },
    { url: '/folders', result: false },
  ];

  it.each(tests)('$url should be $result', ({ url, result }) => {
    expect(isExternalLink(url)).toBe(result);
  });
});

describe('resolve', () => {
  const tests = [
    // relative tests
    { url: 'https://immich.app/test', host: 'immich.app', expected: '/test' },
    { url: 'https://immich.app/test', host: 'pr-123.immich.app', expected: '/test' },
    { url: 'https://my.immich.app/test', host: 'my.immich.app', expected: '/test' },
    { url: 'https://my.immich.app/test', host: 'my.pr-123.immich.app', expected: '/test' },

    // absolute tests
    { url: 'https://immich.app/test', host: 'my.immich.app', expected: 'https://immich.app/test' },
    { url: 'https://immich.app/test', host: 'my.pr-123.immich.app', expected: 'https://immich.app/test' },
    { url: 'https://my.immich.app/test', host: 'immich.app', expected: 'https://my.immich.app/test' },
    { url: 'https://my.immich.app/test', host: 'pr-123.immich.app', expected: 'https://my.immich.app/test' },

    // edge cases
    { url: '/test', host: 'pr-123.immich.app', expected: '/test' },
  ];

  it.each(tests)('resolve $url to $expected when the host is $host', ({ url, expected, host }) => {
    expect(resolveUrl(url, host)).toBe(expected);
  });
});

describe(resolveMetadata.name, () => {
  it('should handle site metadata', () => {
    expect(resolveMetadata({ title: 'Title', description: 'Description' })).toEqual({
      type: 'website',
      title: 'Title',
      description: 'Description',
      siteName: 'Title',
      imageUrl: undefined,
    });
  });

  it('should handle site metadata with an image', () => {
    expect(resolveMetadata({ title: 'Title', description: 'Description', imageUrl: 'image-url' })).toMatchObject({
      imageUrl: 'image-url',
    });
  });

  it('should handle page metadata', () => {
    expect(
      resolveMetadata(
        { title: 'Site title', description: 'Site description' },
        { title: 'Page title', description: 'Page description' },
      ),
    ).toEqual({
      type: 'website',
      title: 'Page title | Site title',
      description: 'Page description',
      siteName: 'Site title — Site description',
      imageUrl: undefined,
    });
  });

  it('should handle page metadata with an image', () => {
    expect(
      resolveMetadata(
        { title: 'Title', description: 'Description' },
        { title: 'Title', description: 'Description', imageUrl: 'page-image' },
      ),
    ).toMatchObject({
      imageUrl: 'page-image',
    });
  });

  it('should prefer the page image', () => {
    expect(
      resolveMetadata(
        { title: 'Title', description: 'Description', imageUrl: 'site-image' },
        { title: 'Title', description: 'Description', imageUrl: 'page-image' },
      ),
    ).toMatchObject({
      imageUrl: 'page-image',
    });
  });

  it('should detect an article', () => {
    expect(
      resolveMetadata(
        { title: 'Title', description: 'Description' },
        { title: 'Article title', description: 'Article description' },
        { publishedTime: DateTime.fromObject({ year: 2025, month: 1, day: 1 }) },
      ),
    ).toMatchObject({
      type: 'article',
    });
  });
});

describe(isEnabled.name, () => {
  it('should default to true, when not present', () => {
    expect(isEnabled({})).toBe(true);
  });

  it('should map evaluate to true', () => {
    expect(isEnabled({ $if: () => true })).toBe(true);
  });

  it('should map evaluate to false', () => {
    expect(isEnabled({ $if: () => false })).toBe(false);
  });

  it('should map undefined to false', () => {
    const user: object = undefined as unknown as object;
    expect(isEnabled({ $if: () => user && true })).toBe(false);
  });
});
