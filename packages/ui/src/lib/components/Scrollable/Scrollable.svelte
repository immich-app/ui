<script lang="ts">
  import { afterNavigate } from '$app/navigation';
  import { cleanClass } from '$lib/utilities/internal.js';
  import type { Snippet } from 'svelte';

  type Props = {
    class?: string;
    children?: Snippet;
    transition?: TransitionEvent;
    ref?: HTMLDivElement;
    resetOnNavigate?: boolean;
  };

  let { resetOnNavigate = false, class: className, children, ref = $bindable() }: Props = $props();

  afterNavigate(() => {
    if (resetOnNavigate) {
      ref?.scrollTo(0, 0);
    }
  });
</script>

<div bind:this={ref} class={cleanClass('immich-scrollbar h-full w-full overflow-auto', className)}>
  {@render children?.()}
</div>
