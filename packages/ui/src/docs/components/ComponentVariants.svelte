<script lang="ts">
  import type { Variants } from '@immich/ui';
  import type { Snippet } from 'svelte';

  type Item = { variant: Variants; label: string };

  type Props = {
    child: Snippet<[Item]>;
  };

  const { child }: Props = $props();

  const items: Item[] = [
    { variant: 'filled', label: 'Filled' },
    { variant: 'outline', label: 'Outline' },
    { variant: 'ghost', label: 'Ghost' },
  ];
</script>

{#each items as item (item.variant)}
  {@render child(item)}
{/each}
