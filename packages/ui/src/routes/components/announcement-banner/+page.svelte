<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import AdvanceExample from './AdvanceExample.svelte';
  import advanceExample from './AdvanceExample.svelte?raw';
  import BasicExample from './BasicExample.svelte';
  import basicExample from './BasicExample.svelte?raw';
  import ColorExample from './ColorExample.svelte';
  import colorExample from './ColorExample.svelte?raw';
  import SizeExample from './SizeExample.svelte';
  import sizeExample from './SizeExample.svelte?raw';
</script>

<ComponentPage name="Banner" description="A banner component to display important messages across the top of the page.">
  <ComponentExamples
    examples={[
      { title: 'Basic', code: basicExample, component: BasicExample },
      { title: 'Color', code: colorExample, component: ColorExample },
      { title: 'Size', code: sizeExample, component: SizeExample },
      { title: 'Advance', code: advanceExample, component: AdvanceExample },
    ]}
  />
</ComponentPage>
