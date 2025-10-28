<script lang="ts">
  import Text from '$lib/components/Text/Text.svelte';
  import type { Snippet } from 'svelte';

  type Props = {
    children: Snippet;
  };

  const { children }: Props = $props();
</script>

<Text class="mb-1">
  {@render children()}
</Text>
