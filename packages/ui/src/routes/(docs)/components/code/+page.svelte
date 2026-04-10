<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import ColorExample from './ColorExample.svelte';
  import colorExample from './ColorExample.svelte?raw';
  import GhostExample from './GhostExample.svelte';
  import ghostExample from './GhostExample.svelte?raw';
  import OutlineExample from './OutlineExample.svelte';
  import outlineExample from './OutlineExample.svelte?raw';
  import SizeExample from './SizeExample.svelte';
  import sizeExample from './SizeExample.svelte?raw';
</script>

<ComponentPage name="Code" description="A component for displaying inline code snippets">
  <ComponentExamples
    examples={[
      { title: 'Size', code: sizeExample, component: SizeExample },
      { title: 'Color', code: colorExample, component: ColorExample },
      { title: 'Ghost', code: ghostExample, component: GhostExample },
      { title: 'Outline', code: outlineExample, component: OutlineExample },
    ]}
  />
</ComponentPage>
