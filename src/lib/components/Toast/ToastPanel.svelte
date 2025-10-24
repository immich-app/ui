<script lang="ts">
  import Toast from '$lib/components/Toast/Toast.svelte';
  import { zIndex } from '$lib/constants.js';
  import { isCustomToast } from '$lib/services/toast-manager.svelte.js';
  import type { ToastId, ToastItem } from '$lib/types.js';

  type Props = {
    items: Array<ToastItem & ToastId>;
  };

  const { items }: Props = $props();
</script>

<div class="absolute top-0 right-0 flex flex-col items-end justify-end gap-2 p-4 {zIndex.ToastPanel}">
  {#each items as item (item.id)}
    {#if isCustomToast(item)}
      <item.component {...item.props} />
    {:else}
      <Toast {...item} />
    {/if}
  {/each}
</div>
