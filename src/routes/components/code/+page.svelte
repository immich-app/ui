<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import ColorExample from './ColorExample.svelte';
  import colorExample from './ColorExample.svelte?raw';
  import FilledExample from './FilledExample.svelte';
  import filledExample from './FilledExample.svelte?raw';
  import SizeExample from './SizeExample.svelte';
  import sizeExample from './SizeExample.svelte?raw';
</script>

<ComponentPage name="Code">
  <ComponentExamples
    examples={[
      { title: 'Size', code: sizeExample, component: SizeExample },
      { title: 'Color', code: colorExample, component: ColorExample },
      { title: 'Filled', code: filledExample, component: FilledExample },
    ]}
  />
</ComponentPage>
