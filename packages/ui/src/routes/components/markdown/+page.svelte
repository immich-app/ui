<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  // @ts-expect-error: .md files are handled by the md preprocessor
  import BasicExample from './BasicExample.md';
  import basicExample from './BasicExample.md?raw';
  import BlogExample from './BlogExample.md';
  import blogExample from './BlogExample.md?raw';
</script>

<ComponentPage name="Markdown" description="A set of components for rendering markdown content.">
  <ComponentExamples examples={[{ title: 'Basic', code: basicExample, component: BasicExample }]} />
  <ComponentExamples examples={[{ title: 'Blog', code: blogExample, component: BlogExample }]} />
</ComponentPage>
