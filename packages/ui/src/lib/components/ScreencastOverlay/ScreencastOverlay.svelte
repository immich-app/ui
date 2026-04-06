<script lang="ts">
  import Icon from '$lib/components/Icon/Icon.svelte';
  import { zIndex } from '$lib/constants.js';
  import { screencastManager } from '$lib/services/screencast-manager.svelte.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import {
    mdiAppleKeyboardShift,
    mdiArrowDown,
    mdiArrowLeft,
    mdiArrowRight,
    mdiArrowUp,
    mdiKeyboardReturn,
    mdiKeyboardTab,
    mdiKeyboardTabReverse,
  } from '@mdi/js';
  import { onMount, type Snippet } from 'svelte';

  type Props = {
    ref?: HTMLDivElement;
    child?: Snippet<[event: KeyboardEvent]>;
    class?: string;
  };

  let { ref = $bindable(), child, class: className }: Props = $props();

  const events = $derived(screencastManager.events);
  const cursor = $derived(screencastManager.cursor);

  onMount(() => {
    const interval = setInterval(() => screencastManager.onTick(), 250);
    return () => clearInterval(interval);
  });

  const resolve = (event: KeyboardEvent): { key: string } | { icon: string } => {
    switch (event.key) {
      case 'ArrowLeft': {
        return { icon: mdiArrowLeft };
      }
      case 'ArrowRight': {
        return { icon: mdiArrowRight };
      }
      case 'ArrowUp': {
        return { icon: mdiArrowUp };
      }
      case 'ArrowDown': {
        return { icon: mdiArrowDown };
      }
      case 'Enter': {
        return { icon: mdiKeyboardReturn };
      }
      case 'Shift': {
        return { icon: mdiAppleKeyboardShift };
      }
      case 'Tab': {
        return { icon: event.shiftKey ? mdiKeyboardTabReverse : mdiKeyboardTab };
      }
      case ' ': {
        return { key: event.code };
      }
    }

    return { key: event.key };
  };
</script>

<svelte:window
  onkeydown={(event) => screencastManager.onKeyDown(event)}
  onmousedown={(event) => screencastManager.onMouseDown(event)}
  onmouseup={(event) => screencastManager.onMouseUp(event)}
  onmousemove={(event) => screencastManager.onMouseMove(event)}
/>

{#if cursor}
  <div
    style:top="{cursor.event.clientY}px"
    style:left="{cursor.event.clientX}px"
    class={[
      zIndex.ScreencastOverlay,
      cursor.moving && 'bg-red-500/25',
      `pointer-events-none absolute size-8 -translate-x-[50%] -translate-y-[50%] rounded-full border-2 border-red-500`,
    ]}
  ></div>
{/if}

{#if events.length > 0}
  <div
    bind:this={ref}
    class={cleanClass(
      zIndex.ScreencastOverlay,
      'bg-light-200/75 pointer-events-none absolute top-[80%] z-1000 flex w-full justify-around p-8',
      className,
    )}
  >
    <div class="dark flex gap-1">
      {#each events as event, i (i)}
        {#if child}
          {@render child(event)}
        {:else}
          {@const item = resolve(event)}
          <span class="bg-light-400 text-light-900 rounded border px-4 py-2 text-4xl">
            {#if 'icon' in item}
              <Icon icon={item.icon} />
            {:else}
              {item.key}
            {/if}
          </span>
        {/if}
      {/each}
    </div>
  </div>
{/if}
