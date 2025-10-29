import { describe, expect, it } from 'vitest';
import { escapeSvelteCode, getIdFromText } from './utility.js';

describe('utility', () => {
  describe(getIdFromText.name, () => {
    it('should generate a valid ID from text', () => {
      const result = getIdFromText('Hello World!');
      expect(result).toBe('hello-world');
    });
  });

  describe(escapeSvelteCode.name, () => {
    it('should escape curly braces', () => {
      const code = "const test = { foo: 'bar' };";
      const expected = `const test = \\{ foo: 'bar' \\};`;

      expect(escapeSvelteCode(code)).toBe(expected);
    });

    it('should escape backtics', () => {
      const code = 'console.log(`Hello World!`);';
      const expected = 'console.log(\\`Hello World!\\`);';

      expect(escapeSvelteCode(code)).toBe(expected);
    });
  });
});
