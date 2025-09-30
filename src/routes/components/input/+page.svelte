<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentFieldCard from '$docs/components/ComponentFieldCard.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import ComponentTipCard from '$docs/components/ComponentTipCard.svelte';
  import { asComponentHref } from '$docs/utilities.js';
  import { Link, Text } from '@immich/ui';
  import BasicExample from './BasicExample.svelte';
  import basicExample from './BasicExample.svelte?raw';
  import IconExample from './IconExample.svelte';
  import iconExample from './IconExample.svelte?raw';
  import ShapeExample from './ShapeExample.svelte';
  import shapeExample from './ShapeExample.svelte?raw';
  import SizeExample from './SizeExample.svelte';
  import sizeExample from './SizeExample.svelte?raw';
  import TrailingTextExample from './TrailingTextExample.svelte';
  import trailingTextExample from './TrailingTextExample.svelte?raw';
</script>

<ComponentPage name="Input" description="A metadata component for tracking common form field information">
  <ComponentFieldCard />
  <ComponentTipCard>
    <Text>See <Link href={asComponentHref('PasswordInput')}>PasswordInput</Link> for password input fields fields</Text>
  </ComponentTipCard>
  <ComponentExamples
    examples={[
      { title: 'States', code: basicExample, component: BasicExample },
      { title: 'Shapes', code: shapeExample, component: ShapeExample },
      { title: 'Sizes', code: sizeExample, component: SizeExample },
      { title: 'Icons', code: iconExample, component: IconExample },
      { title: 'Trailing Text', code: trailingTextExample, component: TrailingTextExample },
    ]}
  />
</ComponentPage>
