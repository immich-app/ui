<script lang="ts">
  import type { Size } from '@immich/ui';
  import type { Snippet } from 'svelte';

  type Item = { size: Size; label: string };

  type Props = {
    child: Snippet<[Item]>;
  };

  const { child }: Props = $props();

  const items: Item[] = [
    { size: 'tiny', label: 'Tiny' },
    { size: 'small', label: 'Small' },
    { size: 'medium', label: 'Medium' },
    { size: 'large', label: 'Large' },
    { size: 'giant', label: 'Giant' },
  ];
</script>

{#each items as item (item.size)}
  {@render child(item)}
{/each}
