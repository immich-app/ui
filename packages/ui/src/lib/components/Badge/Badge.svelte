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
    base: 'text-light inline-flex items-center border font-medium antialiased',
    variants: {
      shape: styleVariants.shape,
      color: {
        primary: 'bg-primary',
        secondary: 'bg-dark',
        success: 'bg-success',
        info: 'bg-info',
        warning: 'bg-warning',
        danger: 'bg-danger text-danger-50',
      },
      textSize: styleVariants.textSize,
      paddingSize: {
        tiny: 'px-1.5 py-1',
        small: 'px-1.75 py-0.75',
        medium: 'px-2.5 py-1',
        large: 'px-2.75 py-1',
        giant: 'px-3 py-1.25',
      },
      roundedSize: {
        tiny: 'rounded-lg',
        small: 'rounded-lg',
        medium: 'rounded-lg',
        large: 'rounded-xl',
        giant: 'rounded-xl',
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
