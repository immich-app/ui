<script lang="ts">
  import ComponentCard from '$docs/components/ComponentCard.svelte';
  import Grid from '$docs/components/Grid.svelte';
  import MarkdownPage from '$docs/components/MarkdownPage.svelte';
  import { components } from '$docs/constants.js';
</script>

<MarkdownPage attributes={{ title: 'Components', description: 'A list of all the Immich UI components' }} size="large">
  <Grid>
    {#each components as component (component.name)}
      <ComponentCard {component} />
    {/each}
  </Grid>
</MarkdownPage>
