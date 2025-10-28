<script lang="ts">
  import ComponentSizes from '$docs/components/ComponentSizes.svelte';
  import { Stack, Text, Textarea } from '@immich/ui';

  const lorem = `The quick brown fox jumps over the lazy dog`;
</script>

<Stack>
  <ComponentSizes>
    {#snippet child({ size, label })}
      <div>
        <Text class="mb-1" fontWeight="bold">{label}</Text>
        <Textarea {size} value={lorem}></Textarea>
      </div>
    {/snippet}
  </ComponentSizes>
</Stack>
