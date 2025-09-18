<script lang="ts">
  import Text from '$lib/internal/Text.svelte';
  import type { FontWeight, Size, TextColor, TextVariant } from '$lib/types.js';
  import { cleanClass } from '$lib/utils.js';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  type Props = {
    size?: Size;
    color?: TextColor;
    fontWeight?: FontWeight;
    variant?: TextVariant;
    class?: string;
    children: Snippet;
  } & HTMLAttributes<HTMLElement>;

  const { color, size, fontWeight = 'normal', children, class: className, ...restProps }: Props = $props();

  const styles = tv({
    variants: {
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

<Text tag="p" {color} {fontWeight} class={cleanClass(styles({ size }), className)} {...restProps}>
  {@render children()}
</Text>
