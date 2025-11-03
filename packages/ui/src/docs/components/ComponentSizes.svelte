<script lang="ts">
  import type { Size } from '@immich/ui';
  import type { Snippet } from 'svelte';

  type Item = { size: Size; label: string };

  type Props = {
    child: Snippet<[Item]>;
    fullSize?: boolean;
  };

  const { child, fullSize }: Props = $props();

  const sizes: Item[] = [
    { size: 'tiny', label: 'Tiny' },
    { size: 'small', label: 'Small' },
    { size: 'medium', label: 'Medium' },
    { size: 'large', label: 'Large' },
    { size: 'giant', label: 'Giant' },
  ];

  const items: Item[] = $derived(fullSize ? [...sizes, { size: 'full', label: 'Full' } as unknown as Item] : sizes);
</script>

{#each items as item (item.size)}
  {@render child(item)}
{/each}
