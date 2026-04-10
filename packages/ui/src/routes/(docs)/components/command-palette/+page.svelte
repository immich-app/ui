<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentLink from '$docs/components/ComponentLink.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import ComponentTipCard from '$docs/components/ComponentTipCard.svelte';
  import { Text } from '@immich/ui';
  import BasicExample from './BasicExample.svelte';
  import basicExample from './BasicExample.svelte?raw';
</script>

<ComponentPage name="CommandPalette" description="A command menu that can be used to search, filter, and select items">
  <ComponentTipCard>
    <Text>See <ComponentLink name="CommandPaletteButton" /> for a dedicated button to open the component</Text>
  </ComponentTipCard>
  <ComponentExamples examples={[{ title: 'Basic', code: basicExample, component: BasicExample }]} />
</ComponentPage>
