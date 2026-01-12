<script lang="ts">
  import Text from '$lib/internal/Text.svelte';
  import type { FontWeight, HeadingColor, HeadingSize, HeadingTag, TextVariant } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  type Props = {
    /**
     * The HTML element type.
     */
    tag?: HeadingTag;
    size?: HeadingSize;
    color?: HeadingColor;
    fontWeight?: FontWeight;
    variant?: TextVariant;
    class?: string;

    children: Snippet;
  } & HTMLAttributes<HTMLElement>;

  const { tag = 'p', size = 'medium', fontWeight = 'bold', class: className, children, ...restProps }: Props = $props();

  const styles = tv({
    base: 'leading-none tracking-tight',
    variants: {
      size: {
        tiny: 'text-sm md:text-base',
        small: 'text-lg md:text-xl',
        medium: 'text-xl md:text-2xl',
        large: 'text-3xl md:text-4xl',
        giant: 'text-4xl md:text-5xl',
        title: 'text-5xl md:text-6xl',
      },
    },
  });

  const classList = $derived(cleanClass(styles({ size }), className));
</script>

<Text {tag} {fontWeight} class={classList} {...restProps}>
  {@render children()}
</Text>
