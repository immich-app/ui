<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentLink from '$docs/components/ComponentLink.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import ComponentTipCard from '$docs/components/ComponentTipCard.svelte';
  import { Text } from '@immich/ui';
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

<ComponentPage name="ProgressBar" description="A component for displaying progress of a task">
  <ComponentTipCard>
    <Text>
      Use a progress bar for showing the completion status of a task. See <ComponentLink name="Meter" /> to show static measurements
      like storage usage.
    </Text>
  </ComponentTipCard>
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
