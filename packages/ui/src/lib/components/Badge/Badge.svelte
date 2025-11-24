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
        primary: 'border-primary-100 bg-primary-100 text-primary-950 dark:bg-primary-200 dark:border-primary-200',
        secondary: 'border-light-300 bg-light-100 text-light-950 dark:bg-light-200',
        success: 'border-success-100 bg-success-100 text-success-950 dark:bg-success-200 dark:border-success-200',
        info: 'border-info-200 bg-info-200 text-info-950',
        warning: 'border-warning-200 bg-warning-200 text-warning-950',
        danger: 'border-danger-200 bg-danger-200 text-danger-950 dark:bg-danger-200',
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
