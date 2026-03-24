<script>
  import ComponentColors from '$docs/components/ComponentColors.svelte';
  import { Meter, Stack } from '@immich/ui';
</script>

<Stack>
  <ComponentColors>
    {#snippet child({ color })}
      <Meter {color} value={0.7} size="large" />
    {/snippet}
  </ComponentColors>
</Stack>
