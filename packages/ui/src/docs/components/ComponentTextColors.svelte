<script lang="ts">
  import type { TextColor } from '@immich/ui';
  import type { Snippet } from 'svelte';

  type Item = { color: TextColor; label: string };

  type Props = {
    child: Snippet<[Item]>;
  };

  const { child }: Props = $props();

  const items: Item[] = [
    { color: 'primary', label: 'Primary' },
    { color: 'secondary', label: 'Secondary' },
    { color: 'muted', label: 'Muted' },
    { color: 'success', label: 'Success' },
    { color: 'info', label: 'Info' },
    { color: 'warning', label: 'Warning' },
    { color: 'danger', label: 'Danger' },
  ];
</script>

{#each items as item (item.color)}
  {@render child(item)}
{/each}
