<script lang="ts">
  import { ChildKey } from '$lib/constants.js';
  import Child from '$lib/internal/Child.svelte';
  import type { Snippet } from 'svelte';

  type Props = {
    children: Snippet;
    class?: string;
  };

  let { children, class: className }: Props = $props();
</script>

<Child for={ChildKey.AppShell} as={ChildKey.AppShellBar} class={className}>
  {@render children?.()}
</Child>
