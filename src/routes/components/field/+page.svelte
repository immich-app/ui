<script lang="ts">
  import ComponentDescription from '$docs/components/ComponentDescription.svelte';
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import BasicExample from './BasicExample.svelte';
  import basicExample from './BasicExample.svelte?raw';
  import ColorExample from './ColorExample.svelte';
  import colorExample from './ColorExample.svelte?raw';
</script>

<ComponentPage name="Field">
  <ComponentDescription>A metadata component for tracking common form field information</ComponentDescription>
  <ComponentExamples
    examples={[
      { title: 'Basic', code: basicExample, component: BasicExample },
      { title: 'Color', code: colorExample, component: ColorExample },
    ]}
  />
</ComponentPage>
