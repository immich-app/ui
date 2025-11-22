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
        primary:
          'bg-primary-100 border-primary-100 text-primary-950 dark:text-primary-50 dark:bg-primary-800 dark:border-primary-800',
        secondary:
          'border-neutral-20 bg-neutral-100 text-neutral-950 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50',
        success:
          'border-success-100 bg-success-100 text-success-950 dark:text-success-50 dark:bg-success-800 dark:border-success-800',
        info: 'border-info-100 bg-info-200 text-info-950 dark:text-info-50 dark:bg-info-800 dark:border-info-800',
        warning:
          'border-warning-100 bg-warning-200 text-warning-950 dark:text-warning-50 dark:bg-warning-800 dark:border-warning-800',
        danger:
          'border-danger-100 bg-danger-200 text-danger-950 dark:text-danger-50 dark:bg-danger-900 dark:border-danger-800',
      },
      textSize: styleVariants.textSize,
      paddingSize: {
        tiny: 'px-1.5 py-px',
        small: 'px-1.75 py-0.5',
        medium: 'px-2.5 py-0.75',
        large: 'px-2.75 py-1',
        giant: 'px-3 py-1.25',
      },
      roundedSize: {
        tiny: 'rounded-md',
        small: 'rounded-md',
        medium: 'rounded-md',
        large: 'rounded-lg',
        giant: 'rounded-lg',
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
