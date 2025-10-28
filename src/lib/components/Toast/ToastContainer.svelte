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
    base: 'bg-light text-dark overflow-hidden transition-all',
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
      borderColor: styleVariants.borderColor,
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
        primary: 'bg-primary/10 dark:bg-primary/25',
        secondary: 'bg-dark/10 dark:bg-dark/25',
        muted: 'bg-subtle dark:bg-subtle',
        info: 'bg-info/10 dark:bg-info/25',
        warning: 'bg-warning/10 dark:bg-warning/25',
        danger: 'bg-danger/10 dark:bg-danger/25',
        success: 'bg-success/10 dark:bg-success/25',
      },
      outline: {
        primary: 'bg-primary/10 text-primary hover:bg-primary/20',
        secondary: 'bg-dark/10 text-dark hover:bg-dark/20',
        success: 'bg-success/10 text-success hover:bg-success/20',
        danger: 'bg-danger/10 text-danger hover:bg-danger/20',
        warning: 'bg-warning/10 text-warning hover:bg-warning/20',
        info: 'bg-info/10 text-info hover:bg-info/20',
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
