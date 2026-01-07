<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import BasicExample from './BasicExample.svelte';
  import basicExample from './BasicExample.svelte?raw';
  import ColorExample from './ColorExample.svelte';
  import colorExample from './ColorExample.svelte?raw';
  import OtherExample from './OtherExample.svelte';
  import otherExample from './OtherExample.svelte?raw';
  import SizeExample from './SizeExample.svelte';
  import sizeExample from './SizeExample.svelte?raw';
</script>

<ComponentPage name="Icon" description="An icon component for showing MDI and other svg icons">
  <ComponentExamples
    examples={[
      { title: 'Basic', code: basicExample, component: BasicExample },
      { title: 'Sizes', code: sizeExample, component: SizeExample },
      { title: 'Colors', code: colorExample, component: ColorExample },
      { title: 'Other', code: otherExample, component: OtherExample },
    ]}
  />
</ComponentPage>
