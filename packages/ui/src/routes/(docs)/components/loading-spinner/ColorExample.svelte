<script>
  import ComponentColors from '$docs/components/ComponentColors.svelte';
  import { HStack, LoadingSpinner } from '@immich/ui';
</script>

<HStack wrap>
  <ComponentColors>
    {#snippet child({ color })}
      <LoadingSpinner {color} size="large" />
    {/snippet}
  </ComponentColors>
</HStack>
