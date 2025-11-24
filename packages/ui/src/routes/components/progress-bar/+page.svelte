<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import AnimatedExample from './AnimatedExample.svelte';
  import animatedExample from './AnimatedExample.svelte?raw';
  import ColorExample from './ColorExample.svelte';
  import colorExample from './ColorExample.svelte?raw';
  import SizeExample from './SizeExample.svelte';
  import sizeExample from './SizeExample.svelte?raw';
</script>

<ComponentPage name="ProgressBar">
  <ComponentExamples
    examples={[
      { title: 'Animated Example', code: animatedExample, component: AnimatedExample },
      { title: 'Sizes', code: sizeExample, component: SizeExample },
      { title: 'Color', code: colorExample, component: ColorExample },
    ]}
  />
</ComponentPage>
