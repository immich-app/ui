<script lang="ts">
  import ComponentTextColors from '$docs/components/ComponentTextColors.svelte';
  import { Stack, Text } from '@immich/ui';
</script>

<Stack>
  <ComponentTextColors>
    {#snippet child({ color, label })}
      <div>
        <Text class="mb-1" fontWeight="bold">{label}</Text>
        <Text size="medium" {color}>The quick brown fox jumps over the lazy dog</Text>
      </div>
    {/snippet}
  </ComponentTextColors>
</Stack>
