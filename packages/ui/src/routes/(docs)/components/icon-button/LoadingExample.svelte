<script lang="ts">
  import ComponentColors from '$docs/components/ComponentColors.svelte';
  import { HStack, IconButton, Stack } from '@immich/ui';
  import { mdiMagnify } from '@mdi/js';

  const icon = mdiMagnify;
</script>

<Stack>
  <HStack>
    <ComponentColors>
      {#snippet child({ color, label })}
        <IconButton {icon} {color} aria-label={label} variant="filled" loading />
      {/snippet}
    </ComponentColors>
  </HStack>
  <HStack>
    <ComponentColors>
      {#snippet child({ color, label })}
        <IconButton {icon} {color} aria-label={label} variant="ghost" loading />
      {/snippet}
    </ComponentColors>
  </HStack>
  <HStack>
    <ComponentColors>
      {#snippet child({ color, label })}
        <IconButton {icon} {color} aria-label={label} variant="outline" loading />
      {/snippet}
    </ComponentColors>
  </HStack>
</Stack>
