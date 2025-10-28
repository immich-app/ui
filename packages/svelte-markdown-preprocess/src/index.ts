import fm from 'front-matter';
import type { PreprocessorGroup } from 'svelte/compiler';
import { md } from './markdown.js';
import { SvelteFile } from './svelte-file.js';

type Layouts = Record<string, string>;
type Options = { layouts?: Layouts };

const resolveLayout = (layout?: string, layouts?: Layouts) => {
  if (layout && layouts) {
    return layouts[layout];
  }
};

const SCRIPT_BODY_REGEX = /<script.*>(?<body>(.|\n)*?)<\/script>/;

const parse = (content: string) => {
  let scriptBody = '';

  const match = SCRIPT_BODY_REGEX.exec(content);
  const bodyGroup = match?.groups?.body;
  if (bodyGroup) {
    scriptBody = bodyGroup.trim();
    content = content.substring(match.index + match[0].length).trim();
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const { attributes, body } = fm(content);

  return { attributes, body, scriptBody };
};

export const svelteMarkdownPreprocess = (options: Options): PreprocessorGroup => {
  const { layouts } = options || {};

  return {
    name: 'immich-markdown',
    async markup({ content, filename }) {
      if (!filename?.endsWith('.md')) {
        return;
      }

      const { attributes, body, scriptBody } = parse(content);

      const file = new SvelteFile();
      file.addScript(`import { Markdown } from '@immich/ui';`);

      const layout = resolveLayout(attributes.layout, layouts);
      if (layout) {
        file.addScript(`import Layout from '${layout}';`);
        file.addTag(`<Layout>`, '</Layout>');
      }

      file.addScript(scriptBody);
      file.addTemplate(await md.parse(body));

      return { code: file.export() };
    },
  };
};
