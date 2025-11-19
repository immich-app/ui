<script lang="ts">
  import { styleVariants } from '$lib/styles.js';
  import type { Color, Shape, Size } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  type Props = {
    size?: Size;
    color?: Color;
    shape?: Shape;
    children?: Snippet;
    class?: string;
  } & Omit<HTMLAttributes<HTMLSpanElement>, 'color'>;

  let {
    size = 'medium',
    class: className,
    color = 'primary',
    shape = 'semi-round',
    children,
    ...props
  }: Props = $props();

  const styles = tv({
    base: 'border px-2 py-0.5',
    variants: {
      shape: styleVariants.shape,
      color: {
        primary: 'bg-primary-200 text-primary-950 dark:text-primary-50 dark:bg-primary-800',
        secondary: 'bg-neutral-200 text-neutral-950 dark:bg-neutral-800 dark:text-neutral-50',
        success: 'bg-success-200 text-success-950 dark:text-success-50 dark:bg-success-800',
        danger: 'bg-danger-200 text-danger-950 dark:text-danger-50 dark:bg-danger-800',
        warning: 'bg-warning-200 text-warning-950 dark:text-warning-50 dark:bg-warning-800',
        info: 'bg-info-200 text-info-950 dark:text-info-50 dark:bg-info-800',
      },
      textSize: styleVariants.textSize,
      paddingSize: {
        tiny: 'px-1 py-0.5',
        small: 'px-2 py-0.5',
        medium: 'px-2 py-0.5',
        large: 'px-2 py-1.5',
        giant: 'px-3 py-1',
      },
      roundedSize: {
        tiny: 'rounded-sm',
        small: 'rounded-sm',
        medium: 'rounded-sm',
        large: 'rounded-md',
        giant: 'rounded-md',
      },
    },
  });
</script>

<span
  {...props}
  class={cleanClass(
    className,
    styles({
      color,
      textSize: size,
      paddingSize: size,
      shape,
      roundedSize: shape === 'semi-round' ? size : undefined,
    }),
  )}>{@render children?.()}</span
>
