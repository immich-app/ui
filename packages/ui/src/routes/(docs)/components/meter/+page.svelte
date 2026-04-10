<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentLink from '$docs/components/ComponentLink.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import ComponentTipCard from '$docs/components/ComponentTipCard.svelte';
  import { Text } from '@immich/ui';
  import ColorExample from './ColorExample.svelte';
  import colorExample from './ColorExample.svelte?raw';
  import OtherExample from './OtherExample.svelte';
  import otherExample from './OtherExample.svelte?raw';
  import ShapeExample from './ShapeExample.svelte';
  import shapeExample from './ShapeExample.svelte?raw';
  import SizeExample from './SizeExample.svelte';
  import sizeExample from './SizeExample.svelte?raw';
</script>

<ComponentPage name="Meter" description="A component for displaying a static measurement within a known range">
  <ComponentTipCard>
    <Text>
      Use a meter to show static measurements like storage usage. See <ComponentLink name="ProgressBar" /> for showing the
      completion status of a task.
    </Text>
  </ComponentTipCard>
  <ComponentExamples
    examples={[
      { title: 'Size', code: sizeExample, component: SizeExample },
      { title: 'Shape', code: shapeExample, component: ShapeExample },
      { title: 'Color', code: colorExample, component: ColorExample },
      { title: 'Other', code: otherExample, component: OtherExample },
    ]}
  />
</ComponentPage>
