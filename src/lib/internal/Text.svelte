<script lang="ts">
  import type { FontWeight, HeadingColor, HeadingTag, Size, TextVariant } from '$lib/types.js';
  import { cleanClass } from '$lib/utils.js';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  type Props = {
    /**
     * The HTML element type.
     */
    tag?: HeadingTag;
    fontWeight?: FontWeight;
    variant?: TextVariant;
    color?: HeadingColor;
    size?: Size;
    class?: string;

    children: Snippet;
  } & HTMLAttributes<HTMLElement>;

  const { tag = 'p', color, fontWeight, variant, size, class: className, children, ...restProps }: Props = $props();

  const styles = tv({
    variants: {
      color: {
        muted: 'text-gray-600 dark:text-gray-400',
        primary: 'text-primary',
        secondary: 'text-dark',
        success: 'text-success',
        danger: 'text-danger',
        warning: 'text-warning',
        info: 'text-info',
      },
      fontWeight: {
        light: 'font-light',
        normal: 'font-normal',
        'semi-bold': 'font-semibold',
        bold: 'font-bold',
        'extra-bold': 'font-extrabold',
      },
      size: {
        tiny: 'text-xs',
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
        giant: 'text-xl',
      },
      variant: {
        italic: 'italic',
      },
    },
  });

  const classList = $derived(cleanClass(styles({ color, size, fontWeight, variant }), className));
</script>

<svelte:element this={tag} class={classList} {...restProps}>
  {@render children()}
</svelte:element>
