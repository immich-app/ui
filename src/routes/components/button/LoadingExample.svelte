<script lang="ts">
  import ComponentColors from '$docs/components/ComponentColors.svelte';
  import { Button, HStack, Stack } from '@immich/ui';
</script>

<Stack>
  <HStack>
    <ComponentColors>
      {#snippet child({ color, label })}
        <Button {color} loading>{label}</Button>
      {/snippet}
    </ComponentColors>
  </HStack>
  <HStack>
    <ComponentColors>
      {#snippet child({ color, label })}
        <Button {color} loading variant="ghost">{label}</Button>
      {/snippet}
    </ComponentColors>
  </HStack>
  <HStack>
    <ComponentColors>
      {#snippet child({ color, label })}
        <Button {color} loading variant="outline">{label}</Button>
      {/snippet}
    </ComponentColors>
  </HStack>
</Stack>
