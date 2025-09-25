import { isExternalLink, resolveUrl } from '$lib/utilities/common.js';
import { describe, expect, it } from 'vitest';

describe('isExternalLink', () => {
  const tests = [
    { url: 'https://immich.app/test', result: true },
    { url: 'http://immich.app/test', result: true },
    { url: 'http://localhost/test', result: true },
    { url: 'http://localhost:1234/test', result: true },
    { url: 'mailto://something', result: true },
    { url: 'app.immich://', result: true },
    { url: '/testing', result: false },
    { url: '#testing', result: false },
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
