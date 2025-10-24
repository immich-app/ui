<script lang="ts">
  import Text from '$lib/internal/Text.svelte';
  import { styleVariants } from '$lib/styles.js';
  import type { FontWeight, Size, TextColor, TextVariant } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
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
      size: styleVariants.textSize,
    },
  });
</script>

<Text tag="p" {color} {fontWeight} class={cleanClass(styles({ size }), className)} {...restProps}>
  {@render children()}
</Text>
