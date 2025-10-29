import { Marked } from 'marked';

export const md = new Marked().use({
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
      let id = text
        .toLowerCase()
        .replace(/<[^>]*>/g, '')
        .replace(/[^a-z1-9 ]/g, '')
        .replace(/\s+/g, '-');

      if (id.endsWith('-')) {
        id = id.slice(0, -1);
      }

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
      return `<Markdown.Paragraph>${children}</Markdown.Paragraph>\n`;
    },

    space() {
      return `<Markdown.Space />\n`;
    },

    code({ text, lang }) {
      return `<Markdown.Code lang="${lang}" code={\`${text}\`} multiline />\n`;
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
