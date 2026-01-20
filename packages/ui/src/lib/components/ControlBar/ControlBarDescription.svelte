<script lang="ts">
  import Text from '$lib/components/Text/Text.svelte';
  import type { Snippet } from 'svelte';

  type Props = {
    class?: string;
    children: Snippet;
  };

  let { children, class: className }: Props = $props();
</script>

<Text size="small" color="muted" class={className}>
  {@render children?.()}
</Text>
