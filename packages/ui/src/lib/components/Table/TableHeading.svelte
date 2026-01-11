<script lang="ts">
  import { cleanClass } from '$lib/utilities/internal.js';
  import type { Snippet } from 'svelte';

  type Props = {
    class?: string;
    children?: Snippet;
  };

  const { class: className, children }: Props = $props();
</script>

<th class={cleanClass('w-full px-4 py-2', className)}>
  {@render children?.()}
</th>
