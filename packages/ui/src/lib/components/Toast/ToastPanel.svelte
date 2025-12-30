<script lang="ts">
  import Toast from '$lib/components/Toast/Toast.svelte';
  import TooltipProvider from '$lib/components/Tooltip/TooltipProvider.svelte';
  import { zIndex } from '$lib/constants.js';
  import { isCustomToast } from '$lib/services/toast-manager.svelte.js';
  import type { ToastPanelProps } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';

  const { items, class: className, ...props }: ToastPanelProps = $props();

  const isEmpty = $derived(items.length === 0);
</script>

<TooltipProvider>
  <div
    class={cleanClass(
      isEmpty ? 'hidden' : 'absolute top-0 right-0 flex flex-col items-end justify-end gap-2 p-4',
      zIndex.ToastPanel,
      className,
    )}
    {...props}
  >
    {#each items as item (item.id)}
      {#if isCustomToast(item)}
        <item.component {...item.props} />
      {:else}
        <Toast {...item} />
      {/if}
    {/each}
  </div>
</TooltipProvider>
