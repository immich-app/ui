<script lang="ts">
  import Text from '$lib/components/Text/Text.svelte';
  import type { Snippet } from 'svelte';

  type Props = {
    children: Snippet;
  };

  const { children }: Props = $props();
</script>

<Text {children} class="border-muted border-s-4 ps-4" variant="italic" />
