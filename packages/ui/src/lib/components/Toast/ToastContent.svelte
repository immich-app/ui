<script lang="ts">
  import CloseButton from '$lib/components/CloseButton/CloseButton.svelte';
  import Icon from '$lib/components/Icon/Icon.svelte';
  import Text from '$lib/components/Text/Text.svelte';
  import { styleVariants } from '$lib/styles.js';
  import type { ToastContentProps } from '$lib/types.js';
  import { resolveIcon } from '$lib/utilities/internal.js';
  import { mdiAlert, mdiBell, mdiCheck, mdiCloseOctagon, mdiInformation } from '@mdi/js';
  import { type Snippet } from 'svelte';
  import { tv } from 'tailwind-variants';

  let { color = 'primary', icon: iconOverride, title, description, onClose, children }: ToastContentProps = $props();

  const icon = $derived(
    resolveIcon({
      icons: {
        primary: mdiBell,
        danger: mdiCloseOctagon,
        info: mdiInformation,
        warning: mdiAlert,
        success: mdiCheck,
      },
      color,
      override: iconOverride,
      fallback: mdiBell,
    }),
  );

  const iconStyles = tv({
    base: 'h-8 w-8 shrink-0 rounded-xl py-1.75',
    variants: {
      color: {
        primary: 'bg-primary-100 dark:bg-primary-200 text-primary',
        secondary: 'bg-light-200 dark:bg-light-300',
        success: 'bg-success-100 dark:bg-success-200 text-success',
        info: 'bg-info-200 text-info',
        warning: 'bg-warning-200 text-warning',
        danger: 'bg-danger-200 text-danger',
      },
    },
  });

  const titleStyles = tv({
    variants: {
      color: styleVariants.textColor,
    },
  });
</script>

{#snippet resolve(text: string | Snippet)}
  {#if typeof text === 'string'}{text}{:else}{@render text()}{/if}
{/snippet}

<div class="flex items-center px-3">
  <div class="flex items-center">
    {#if icon}
      <Icon {icon} class={iconStyles({ color })} size="18" />
    {/if}
  </div>
  <div class="ms-1 flex grow justify-between">
    <div class="flex flex-col p-2">
      {#if title}
        <Text fontWeight="semi-bold" class={titleStyles({ color })}>{@render resolve(title)}</Text>
      {/if}
      {#if description}
        <Text size="small">{@render resolve(description)}</Text>
      {/if}
    </div>
    {#if onClose}
      <div class="flex items-center">
        <CloseButton color="secondary" variant="ghost" onclick={onClose} />
      </div>
    {/if}
  </div>
</div>
{@render children?.()}
