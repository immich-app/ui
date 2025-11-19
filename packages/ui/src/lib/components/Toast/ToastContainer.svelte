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
    base: 'bg-light text-dark overflow-hidden py-1.5 shadow-xs transition-all',
    variants: {
      color: {
        primary: 'bg-primary-100 dark:bg-primary-900',
        secondary: 'bg-neutral-100 dark:bg-neutral-900',
        muted: 'bg-subtle dark:bg-subtle',
        info: 'bg-info-100 dark:bg-info-900',
        warning: 'bg-warning-100 dark:bg-warning-900',
        danger: 'bg-danger-100 dark:bg-danger-900',
        success: 'bg-success-100 dark:bg-success-900',
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
