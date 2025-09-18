<script lang="ts">
  import Stack from '$lib/components/Stack/Stack.svelte';
  import type { HStackProps } from '$lib/types.js';

  const { class: className, children, ...props }: HStackProps = $props();
</script>

<Stack direction="row" align="center" class={className} {...props}>
  {@render children()}
</Stack>
