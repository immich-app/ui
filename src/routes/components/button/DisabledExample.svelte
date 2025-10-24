<script lang="ts">
  import ComponentColors from '$docs/components/ComponentColors.svelte';
  import { Button, HStack } from '@immich/ui';
</script>

<HStack wrap>
  <ComponentColors>
    {#snippet child({ color, label })}
      <Button disabled {color}>{label}</Button>
    {/snippet}
  </ComponentColors>
</HStack>
