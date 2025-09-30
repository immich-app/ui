<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import BasicExample from './BasicExample.svelte';
  import basicExample from './BasicExample.svelte?raw';
</script>

<ComponentPage name="CodeBlock" description="A component for displaying multi-line code blocks syntax highlighting">
  <ComponentExamples examples={[{ title: 'Basic', code: basicExample, component: BasicExample }]} />
</ComponentPage>
