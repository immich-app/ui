<script lang="ts">
  import TableCell from '$lib/components/Table/TableCell.svelte';
  import type { Snippet } from 'svelte';

  type Props = {
    children?: Snippet;
  };

  const { children }: Props = $props();
</script>

<TableCell {children} />
