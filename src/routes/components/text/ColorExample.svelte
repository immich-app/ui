<script lang="ts">
  import ComponentColors from '$docs/components/ComponentColors.svelte';
  import { Stack, Text } from '@immich/ui';
</script>

<Stack>
  <ComponentColors>
    {#snippet child({ color, label })}
      <div>
        <Text class="mb-1" fontWeight="bold">{label}</Text>
        <Text size="medium" {color}>The quick brown fox jumps over the lazy dog</Text>
      </div>
    {/snippet}
  </ComponentColors>
</Stack>
