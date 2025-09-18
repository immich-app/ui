<script lang="ts">
  import type { Size, TextColor } from '$lib/types.js';
  import { cleanClass } from '$lib/utils.js';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  type Props = {
    color?: TextColor;
    size?: Size;
    variant?: 'filled';
    class?: string;
    children: Snippet;
  } & HTMLAttributes<HTMLElement>;

  const { class: className, size = 'medium', variant, color = 'secondary', children, ...restProps }: Props = $props();

  const styles = tv({
    base: 'font-monospace',
    variants: {
      textColor: {
        muted: 'text-gray-600 dark:text-gray-400',
        primary: 'text-primary',
        secondary: 'text-dark',
        success: 'text-success',
        danger: 'text-danger',
        warning: 'text-warning',
        info: 'text-info',
      },

      filled: {
        true: 'rounded-lg p-3',
        false: '',
      },

      filledColor: {
        false: '',
        muted: 'text-light bg-gray-600 dark:bg-gray-800',
        primary: 'text-primary dark:bg-primary/20 bg-gray-200 dark:text-gray-200',
        secondary: 'text-light bg-gray-700 dark:bg-gray-200',
        success: 'bg-success text-light',
        danger: 'bg-danger text-light',
        warning: 'bg-warning text-light',
        info: 'bg-info text-dark',
      },

      size: {
        tiny: 'text-xs',
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
        giant: 'text-xl',
      },
    },
  });
</script>

<code
  class={cleanClass(
    styles({
      filled: variant === 'filled',
      filledColor: variant === 'filled' && color,
      textColor: color,
      size,
    }),
    className,
  )}
  {...restProps}>{@render children()}</code
>
