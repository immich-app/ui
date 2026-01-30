<script lang="ts">
  import TableHeader from '$lib/components/Table/TableHeader.svelte';
  import type { Snippet } from 'svelte';

  type Props = {
    children?: Snippet;
  };

  const { children }: Props = $props();
</script>

<TableHeader {children} />
