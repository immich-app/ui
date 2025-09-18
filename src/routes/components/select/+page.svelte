<script lang="ts">
  import ComponentDescription from '$docs/components/ComponentDescription.svelte';
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentFieldCard from '$docs/components/ComponentFieldCard.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import ComponentTipCard from '$docs/components/ComponentTipCard.svelte';
  import { asSlug } from '$docs/utilities.js';
  import { Link, Text } from '@immich/ui';
  import BasicExample from './BasicExample.svelte';
  import basicExample from './BasicExample.svelte?raw';
</script>

<ComponentPage name="Select">
  <ComponentDescription>Allows the user to select a single option from a dropdown list</ComponentDescription>
  <ComponentFieldCard />
  <ComponentTipCard>
    <Text
      >The <Link href={asSlug('Select')}>Select</Link> component is very similar to the <Link
        href={asSlug('MultiSelect')}>MultiSelect</Link
      > component, but only allows the user to select a single option.</Text
    >
  </ComponentTipCard>
  <ComponentExamples examples={[{ title: 'Basic', code: basicExample, component: BasicExample }]} />
</ComponentPage>
