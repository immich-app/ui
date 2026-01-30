<script lang="ts">
  import { styleVariants } from '$lib/styles.js';
  import type { Size, TextColor } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  type Props = {
    color?: TextColor;
    size?: Size;
    variant?: 'filled' | 'ghost' | 'outline';
    class?: string;
    children: Snippet;
  } & HTMLAttributes<HTMLElement>;

  const { class: className, size, variant = 'filled', color = 'primary', children, ...restProps }: Props = $props();

  const styles = tv({
    base: 'font-monospace rounded-lg px-2 py-1',
    variants: {
      ghostTheme: {
        false: '',
        muted: 'text-gray-600 dark:text-gray-400',
        primary: 'text-primary',
        secondary: 'text-dark',
        success: 'text-success',
        danger: 'text-danger',
        warning: 'text-warning',
        info: 'text-info',
      },

      filledTheme: {
        false: '',
        muted: 'text-dark bg-subtle',
        primary: 'text-dark dark:bg-primary/20 bg-gray-200 dark:text-gray-200',
        secondary: 'text-light bg-light-700',
        success: 'bg-success text-light',
        danger: 'bg-danger text-light',
        warning: 'bg-warning text-light',
        info: 'bg-info text-light',
      },

      outlineTheme: {
        false: '',
        muted: 'border-light-600 text-light-600 border',
        primary: 'border-primary text-primary border',
        secondary: 'border-dark text-dark border',
        success: 'border-success text-success border',
        danger: 'border-danger text-danger border',
        warning: 'border-warning text-warning border',
        info: 'border-info text-info border',
      },

      size: styleVariants.textSize,
    },
  });
</script>

<code
  class={cleanClass(
    styles({
      filledTheme: variant === 'filled' ? color : false,
      outlineTheme: variant === 'outline' ? color : false,
      ghostTheme: variant === 'ghost' ? color : false,
      size,
    }),
    className,
  )}
  {...restProps}>{@render children()}</code
>
