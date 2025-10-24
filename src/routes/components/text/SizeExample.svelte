<script lang="ts">
  import ComponentSizes from '$docs/components/ComponentSizes.svelte';
  import { Stack, Text } from '@immich/ui';
</script>

<Stack>
  <ComponentSizes>
    {#snippet child({ size, label })}
      <div>
        <Text class="mb-1" fontWeight="bold">{label}</Text>
        <Text {size}>The quick brown fox jumps over the lazy dog</Text>
      </div>
    {/snippet}
  </ComponentSizes>
</Stack>
