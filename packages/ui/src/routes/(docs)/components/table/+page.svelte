<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import BasicExample from './BasicExample.svelte';
  import basicExample from './BasicExample.svelte?raw';
  import ColorExample from './ColorExample.svelte';
  import colorExample from './ColorExample.svelte?raw';
  import SizeExample from './SizeExample.svelte';
  import sizeExample from './SizeExample.svelte?raw';
  import SpacingExample from './SpacingExample.svelte';
  import spacingExample from './SpacingExample.svelte?raw';
  import StripedExample from './StripedExample.svelte';
  import stripedExample from './StripedExample.svelte?raw';
</script>

<ComponentPage name="Table" description="The Table component is used to display data in a structured tabular format">
  <ComponentExamples
    examples={[
      { title: 'Basic', code: basicExample, component: BasicExample },
      { title: 'Striped', code: stripedExample, component: StripedExample },
      { title: 'Color', code: colorExample, component: ColorExample },
      { title: 'Spacing', code: spacingExample, component: SpacingExample },
      { title: 'Size', code: sizeExample, component: SizeExample },
    ]}
  />
</ComponentPage>
