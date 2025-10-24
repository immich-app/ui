<script lang="ts">
  import ComponentColors from '$docs/components/ComponentColors.svelte';
  import { Heading, Stack } from '@immich/ui';
</script>

<Stack>
  <ComponentColors>
    {#snippet child({ color })}
      <Heading tag="h1" size="medium" {color}>Heading</Heading>
    {/snippet}
  </ComponentColors>
</Stack>
