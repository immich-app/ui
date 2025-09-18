<script lang="ts">
  import { afterNavigate } from '$app/navigation';
  import { cleanClass } from '$lib/utils.js';
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

<style>
  /* width */
  .immich-scrollbar::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    visibility: hidden;
  }
  /* Track */
  .immich-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 16px;
    visibility: hidden;
  }

  /* Handle */
  .immich-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(85, 86, 87, 0.408);
    border-radius: 16px;
    visibility: hidden;
  }

  /* Handle on hover */
  .immich-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #4250afad;
    border-radius: 16px;
  }

  /*
		* Show scrollbar elements when hovering or actively scrolling
		* Applies to the main scrollbar, track, and thumb components
		* Changes visibility from hidden to visible on user interaction
	*/
  .immich-scrollbar:hover::-webkit-scrollbar,
  .immich-scrollbar:active::-webkit-scrollbar,
  .immich-scrollbar:hover::-webkit-scrollbar-track,
  .immich-scrollbar:active::-webkit-scrollbar-track,
  .immich-scrollbar:hover::-webkit-scrollbar-thumb,
  .immich-scrollbar:active::-webkit-scrollbar-thumb {
    visibility: visible;
  }
</style>
