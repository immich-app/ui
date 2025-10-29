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
    variant = 'filled',
    class: className,
    children,
    ...restProps
  }: ToastContainerProps = $props();

  const containerStyles = tv({
    base: 'bg-light text-dark overflow-hidden shadow-xs transition-all',
    variants: {
      shape: styleVariants.shape,
      size: {
        tiny: 'w-64',
        small: 'w-72',
        medium: 'w-xs',
        large: 'w-sm',
        giant: 'w-lg',
        full: 'w-full',
      },

      border: styleVariants.border,
      borderColor: {
        primary: 'border-primary/25',
        secondary: 'border-dark/25',
        success: 'border-success/25',
        danger: 'border-danger/25',
        warning: 'border-warning/25',
        info: 'border-info/25',
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

  const container2Styles = tv({
    base: 'py-1.5',
    variants: {
      filled: {
        primary: 'bg-primary/15 dark:bg-primary/25',
        secondary: 'bg-dark/15 dark:bg-dark/25',
        muted: 'bg-subtle dark:bg-subtle',
        info: 'bg-info/15 dark:bg-info/25',
        warning: 'bg-warning/15 dark:bg-warning/25',
        danger: 'bg-danger/15 dark:bg-danger/25',
        success: 'bg-success/15 dark:bg-success/25',
      },
      outline: {
        primary: 'bg-primary/2 text-primary dark:bg-primary/5',
        secondary: 'bg-dark/2 text-dark dark:bg-dark/5',
        success: 'bg-success/2 text-success dark:bg-success/5',
        danger: 'bg-danger/2 text-danger dark:bg-danger/5',
        warning: 'bg-warning/2 text-warning dark:bg-warning/5',
        info: 'bg-info/2 text-info dark:bg-info/5',
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
      roundedSize: shape === 'semi-round' ? 'medium' : undefined,
      border: variant === 'outline',
      borderColor: variant === 'outline' ? color : undefined,
    }),
    className,
  )}
  {...restProps}
>
  <div
    class={container2Styles({
      outline: variant === 'outline' ? color : undefined,
      filled: variant === 'filled' ? color : undefined,
    })}
  >
    {@render children?.()}
  </div>
</div>
