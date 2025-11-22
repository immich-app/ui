<script lang="ts">
  import { styleVariants } from '$lib/styles.js';
  import type { ToastContainerProps } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import { fade, fly } from 'svelte/transition';
  import { tv } from 'tailwind-variants';

  let {
    color = 'primary',
    shape = 'semi-round',
    size = 'medium',
    class: className,
    children,
    ...restProps
  }: ToastContainerProps = $props();

  const containerStyles = tv({
    base: 'bg-light text-dark overflow-hidden border py-1.5 shadow-xs transition-all',
    variants: {
      color: {
        primary: 'border-primary-100 bg-primary-50 dark:bg-primary-900 dark:border-primary-800',
        secondary: 'border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800',
        success: 'border-success-100 bg-success-50 dark:bg-success-900 dark:border-success-800',
        info: 'border-info-100 bg-info-50 dark:bg-info-900 dark:border-info-800',
        warning: 'border-warning-100 bg-warning-50 dark:bg-warning-900 dark:border-warning-800',
        danger: 'border-danger-100 bg-danger-50 dark:bg-danger-900 dark:border-danger-800',
      },
      shape: styleVariants.shape,
      size: {
        tiny: 'w-64',
        small: 'w-72',
        medium: 'w-xs',
        large: 'w-sm',
        giant: 'w-lg',
        full: 'w-full',
      },
      roundedSize: {
        tiny: 'rounded-lg',
        small: 'rounded-lg',
        medium: 'rounded-xl',
        large: 'rounded-xl',
        giant: 'rounded-2xl',
      },
    },
  });
</script>

<div
  out:fade|global={{ duration: 100 }}
  in:fly|global={{ y: 200, duration: 250 }}
  class={cleanClass(
    containerStyles({
      shape,
      size,
      color,
      roundedSize: shape === 'semi-round' ? 'medium' : undefined,
    }),
    className,
  )}
  {...restProps}
>
  {@render children?.()}
</div>
