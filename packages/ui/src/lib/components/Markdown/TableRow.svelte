<script lang="ts">
  import TableRow from '$lib/components/Table/TableRow.svelte';
  import type { Snippet } from 'svelte';

  type Props = {
    children: Snippet;
  };

  const { children }: Props = $props();
</script>

<TableRow {children} />
