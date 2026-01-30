<script lang="ts">
  import TableBody from '$lib/components/Table/TableBody.svelte';
  import type { Snippet } from 'svelte';

  type Props = {
    children?: Snippet;
  };

  const { children }: Props = $props();
</script>

<TableBody {children} />
