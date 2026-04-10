<script lang="ts">
  import ComponentColors from '$docs/components/ComponentColors.svelte';
  import { IconButton, HStack } from '@immich/ui';
  import { mdiMagnify } from '@mdi/js';

  const icon = mdiMagnify;
</script>

<HStack wrap>
  <ComponentColors>
    {#snippet child({ color, label })}
      <IconButton {icon} {color} aria-label={label} />
    {/snippet}
  </ComponentColors>
</HStack>
