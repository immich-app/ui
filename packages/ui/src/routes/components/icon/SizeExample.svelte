<script lang="ts">
  import Text from '$lib/internal/Text.svelte';
  import { Icon } from '@immich/ui';
  import { mdiAccount } from '@mdi/js';

  type Item = { size: string; label: string };

  const sizes: Item[] = [
    { size: '0.75em', label: 'Small' },
    { size: '1em', label: 'Medium' },
    { size: '1.5em', label: 'Large' },
    { size: '2em', label: 'Very Large' },
    { size: '32', label: 'Also Very Large' },
    { size: '48', label: 'Larger' },
    { size: '72', label: 'Giant' },
  ];
</script>

{#each sizes as item (item.size)}
  <div class="flex place-items-center gap-2">
    <Icon icon={mdiAccount} size={item.size} />
    <Text>{item.label} ({item.size})</Text>
  </div>
{/each}
