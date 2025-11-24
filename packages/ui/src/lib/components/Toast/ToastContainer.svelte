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
        primary: 'border-primary-100 bg-primary-50 dark:bg-primary-100 dark:border-primary-200',
        secondary: 'border-light-200 bg-light-100 dark:bg-light-200 dark:border-light-300',
        success: 'border-success-100 bg-success-50 dark:bg-success-100 dark:border-success-200',
        info: 'border-info-100 bg-info-50 dark:bg-info-100 dark:border-info-200',
        warning: 'border-warning-100 bg-warning-50 dark:bg-warning-100 dark:border-warning-200',
        danger: 'border-danger-100 bg-danger-50 dark:bg-danger-100 dark:border-danger-200',
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
