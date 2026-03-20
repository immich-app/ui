<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
  import ToastContainer from '$lib/components/Toast/ToastContainer.svelte';
  import ToastContent from '$lib/components/Toast/ToastContent.svelte';
  import type { ToastProps } from '$lib/types.js';

  let { children, title, description, icon, onClose, button, ...props }: ToastProps = $props();
</script>

<ToastContainer {...props}>
  {#if children}
    {@render children()}
  {:else if title}
    <ToastContent {title} {description} {icon} {onClose} {...props}>
      {#if button}
        {@const { label, ...rest } = button}
        <div class="flex justify-end px-3 pt-2">
          <Button color="secondary" size="small" {...rest}>
            {label}
          </Button>
        </div>
      {/if}
    </ToastContent>
  {/if}
</ToastContainer>
