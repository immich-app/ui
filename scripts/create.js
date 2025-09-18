import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const svelte = String.raw;

/**
 * @param {string} value
 */
const asSlug = (value) => value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`).replace(/^-/, '');

/**
 * @param {string} filename
 */
const readTemplate = (filename) => readFile(join(import.meta.dirname, 'templates', filename));

/**
 * @param {string} component
 */
const getPageData = (component) => {
  return svelte`
<script lang="ts">
	import ComponentExamples from '$docs/components/ComponentExamples.svelte';
	import ComponentPage from '$docs/components/ComponentPage.svelte';
	import BasicExample from './BasicExample.svelte';
	import basicExample from './BasicExample.svelte?raw';
</script>

<ComponentPage name="${component}">
  <ComponentExamples examples={[{ title: 'Basic', code: basicExample, component: BasicExample }]}/>
</ComponentPage>
`;
};

/**
 * @param {string} component
 */
const getExampleData = (component) => {
  return svelte`
<script>
  import { Text } from '@immich/ui';
</script>

<Text>${component}</Text>
`;
};

const create = async (component) => {
  const componentData = await readTemplate('Component.svelte');
  const slug = asSlug(component);
  const files = [
    { file: `src/lib/components/${component}/${component}.svelte`, data: componentData },
    { file: `src/routes/components/${slug}/+page.svelte`, data: getPageData(component) },
    { file: `src/routes/components/${slug}/BasicExample.svelte`, data: getExampleData(component) },
  ];

  for (const { file: filepath, data } of files) {
    console.log(`Writing ${filepath}`);
    const directory = dirname(filepath);
    await mkdir(directory, { recursive: true });
    await writeFile(filepath, data);
  }
};

const componentName = process.argv[2];

if (!componentName) {
  console.log(`  usage: node scripts/create.js <component-name>`);
  process.exit(1);
}

create(componentName)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
