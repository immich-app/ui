<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import AnimatedExample from './AnimatedExample.svelte';
  import animatedExample from './AnimatedExample.svelte?raw';
  import ColorExample from './ColorExample.svelte';
  import colorExample from './ColorExample.svelte?raw';
  import OtherExample from './OtherExample.svelte';
  import otherExample from './OtherExample.svelte?raw';
  import ShapeExample from './ShapeExample.svelte';
  import shapeExample from './ShapeExample.svelte?raw';
  import SizeExample from './SizeExample.svelte';
  import sizeExample from './SizeExample.svelte?raw';
</script>

<ComponentPage name="ProgressBar">
  <ComponentExamples
    examples={[
      { title: 'Animated Example', code: animatedExample, component: AnimatedExample },
      { title: 'Size', code: sizeExample, component: SizeExample },
      { title: 'Shape', code: shapeExample, component: ShapeExample },
      { title: 'Color', code: colorExample, component: ColorExample },
      { title: 'Other', code: otherExample, component: OtherExample },
    ]}
  />
</ComponentPage>
