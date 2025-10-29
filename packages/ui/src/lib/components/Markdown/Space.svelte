<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    children?: Snippet;
  };

  const { children }: Props = $props();
</script>

<div class="py-2">{@render children?.()}</div>
