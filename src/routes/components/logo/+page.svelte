<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import FutoExample from './FutoExample.svelte';
  import futoExample from './FutoExample.svelte?raw';
  import IconExample from './IconExample.svelte';
  import iconExample from './IconExample.svelte?raw';
  import InlineExample from './InlineExample.svelte';
  import inlineExample from './InlineExample.svelte?raw';
  import SizeExample from './SizeExample.svelte';
  import sizeExample from './SizeExample.svelte?raw';
  import StackedExample from './StackedExample.svelte';
  import stackedExample from './StackedExample.svelte?raw';
</script>

<ComponentPage name="Logo">
  <ComponentExamples
    examples={[
      { title: 'Size', code: sizeExample, component: SizeExample },
      { title: 'Icon', code: iconExample, component: IconExample },
      { title: 'Inline', code: inlineExample, component: InlineExample },
      { title: 'Stacked', code: stackedExample, component: StackedExample },
      { title: 'FUTO', code: futoExample, component: FutoExample },
    ]}
  />
</ComponentPage>
