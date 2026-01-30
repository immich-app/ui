import fm from 'front-matter';
import { marked, MarkedExtension } from 'marked';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import type { PreprocessorGroup } from 'svelte/compiler';
import { markedSvelte } from './marked-svelte.js';
import { SvelteFile } from './svelte-file.js';

type Layouts = Record<string, string>;
type Options = {
  /** defaults to `@immich/ui` */
  markdownPackageName?: string;
  debugPath?: string;
  layouts?: Layouts;
  /** additional extensions to use with marked */
  markedExtensions?: MarkedExtension[];
};

const resolveLayout = (layout?: string, layouts?: Layouts) => {
  if (!layouts) {
    return;
  }

  return layouts[layout || 'default'];
};

const SCRIPT_BODY_REGEX = /<script.*>(?<body>(.|\n)*?)<\/script>/;

const parse = (content: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const { attributes, body: bodyParsed } = fm(content);

  let scriptBody = '';
  let body = bodyParsed;
  const match = SCRIPT_BODY_REGEX.exec(body);
  const bodyGroup = match?.groups?.body;
  if (bodyGroup) {
    scriptBody = bodyGroup.trim();
    body = body.substring(match.index + match[0].length).trim();
  }

  return { attributes, body, scriptBody };
};

export const svelteMarkdownPreprocess = (options: Options) => {
  const { layouts, debugPath, markdownPackageName = '@immich/ui', markedExtensions = [] } = options || {};

  const md = marked.use(...markedExtensions, markedSvelte());

  return {
    name: '@immich/svelte-markdown-preprocess',
    async markup({ content, filename }) {
      if (!filename?.endsWith('.md')) {
        return;
      }

      const { attributes, body, scriptBody } = parse(content);
      const markup = await md.parse(body);

      const file = new SvelteFile();
      file.addScript(`import { Markdown } from '${markdownPackageName}';`);

      const layout = resolveLayout(attributes.layout, layouts);
      if (layout) {
        file.addScript(`import Layout from '${layout}';`);
        file.addTag(`<Layout attributes={${JSON.stringify(attributes)}}>`, '</Layout>');
      }

      file.addScript(scriptBody);
      file.addTemplate(markup);

      const code = file.export();

      if (debugPath) {
        const dir = dirname(debugPath);
        mkdirSync(dir, { recursive: true });
        writeFileSync(debugPath, code);
      }

      return { code };
    },
  } satisfies PreprocessorGroup;
};
