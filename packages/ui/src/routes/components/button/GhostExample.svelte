<script lang="ts">
  import ComponentColors from '$docs/components/ComponentColors.svelte';
  import { Button, HStack } from '@immich/ui';
</script>

<HStack wrap>
  <ComponentColors>
    {#snippet child({ color, label })}
      <Button {color} variant="ghost">{label}</Button>
    {/snippet}
  </ComponentColors>
</HStack>
