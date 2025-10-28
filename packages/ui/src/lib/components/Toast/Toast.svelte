<script lang="ts">
  import ToastContainer from '$lib/components/Toast/ToastContainer.svelte';
  import ToastContent from '$lib/components/Toast/ToastContent.svelte';
  import type { ToastProps } from '$lib/types.js';

  let { children, title, description, icon, onClose, ...props }: ToastProps = $props();
</script>

<ToastContainer {...props}>
  {#if children}
    {@render children()}
  {:else if title}
    <ToastContent {title} {description} {icon} {onClose} {...props} />
  {/if}
</ToastContainer>
