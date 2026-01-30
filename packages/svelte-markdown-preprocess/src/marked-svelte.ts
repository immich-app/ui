import { MarkedExtension } from 'marked';
import { emojify } from 'node-emoji';
import { escapeSvelteCode, getIdFromText } from './utility.js';

export const markedSvelte = (): MarkedExtension => ({
  tokenizer: {
    code(src) {
      if (src.startsWith('    ')) {
        return false;
      }
    },
  },
  renderer: {
    heading({ tokens, depth }) {
      const text = this.parser.parseInline(tokens);
      const id = getIdFromText(text);
      switch (depth) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: {
          return `<Markdown.Heading id="${id}" level={${depth}}>${text}</Markdown.Heading>\n`;
        }
      }

      return `<Markdown.Paragraph>${text}</Markdown.Paragraph>\n`;
    },

    list({ items, ordered, start }) {
      const startAttribute = start && start !== 1 ? ` start={${start}}` : '';
      let output = '';
      output += `<Markdown.List ordered={${ordered}}${startAttribute}>\n`;
      for (const item of items) {
        const content = this.parser.parse(item.tokens);
        const attributes = [item.task && 'task', item.checked && 'checked'].filter(Boolean);
        output += `<Markdown.ListItem ${attributes.join(' ')}>${content}</Markdown.ListItem>\n`;
      }
      output += `</Markdown.List>\n`;

      return output;
    },

    blockquote({ tokens }) {
      const children = this.parser.parse(tokens);
      return `<Markdown.BlockQuote>${children}</Markdown.BlockQuote>\n`;
    },

    paragraph({ tokens }) {
      const children = this.parser.parseInline(tokens);

      // pass through svelte syntax unchanged
      if (
        children.startsWith('{#') ||
        children.startsWith('{/') ||
        children.startsWith('{:') ||
        children.startsWith('{@')
      ) {
        return children;
      }
      return `<Markdown.Paragraph>${children}</Markdown.Paragraph>\n`;
    },

    text(token) {
      if (token.type === 'text') {
        return token.tokens ? this.parser.parseInline(token.tokens) : emojify(token.text);
      }

      return token.text;
    },

    space() {
      return `<Markdown.Space />\n`;
    },

    table({ header, rows }) {
      // table
      let output = `<Markdown.Table>\n`;

      // header
      output += `<Markdown.TableHeader>\n`;
      for (const cell of header) {
        const content = this.parser.parseInline(cell.tokens);
        output += `<Markdown.TableHeading>${content}</Markdown.TableHeading>\n`;
      }
      output += `</Markdown.TableHeader>\n`;

      // body
      output += `<Markdown.TableBody>\n`;
      for (const row of rows) {
        output += `<Markdown.TableRow>\n`;
        for (const cell of row) {
          const content = this.parser.parseInline(cell.tokens);
          output += `<Markdown.TableCell>${content}</Markdown.TableCell>\n`;
        }
        output += `</Markdown.TableRow>\n`;
      }
      output += `</Markdown.TableBody>\n`;

      output += `</Markdown.Table>\n`;

      return output;
    },

    code({ text, lang }) {
      const escaped = escapeSvelteCode(text);
      return `<Markdown.Code lang="${lang}" code={\`${escaped}\`} multiline />\n`;
    },

    hr() {
      return `<Markdown.LineBreak />\n`;
    },

    link({ href, title, text }) {
      const titleAttr = title ? ` title="${title}"` : '';
      return `<Markdown.Link href="${href}"${titleAttr}>${text}</Markdown.Link>`;
    },

    codespan({ text }) {
      return `<Markdown.Code code={\`${text}\`} />`;
    },
  },
});
