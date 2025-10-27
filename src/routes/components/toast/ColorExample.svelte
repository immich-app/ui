<script lang="ts">
  import ComponentColors from '$docs/components/ComponentColors.svelte';
  import { Stack, Text, Toast } from '@immich/ui';

  const description = 'This is the description for the toast';
</script>

<Text class="mb-1" fontWeight="bold">Filled</Text>
<Stack>
  <ComponentColors>
    {#snippet child({ color, label })}
      <Toast variant="filled" {color} title={label} {description} />
    {/snippet}
  </ComponentColors>
</Stack>

<Text class="mt-4 mb-1" fontWeight="bold">Outline</Text>
<Stack>
  <ComponentColors>
    {#snippet child({ color, label })}
      <Toast variant="outline" {color} title={label} {description} />
    {/snippet}
  </ComponentColors>
</Stack>
