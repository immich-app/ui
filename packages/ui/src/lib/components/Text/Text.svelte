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
    inline?: boolean;
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLElement>;

  const { color, inline, size, fontWeight = 'normal', class: className, ...restProps }: Props = $props();

  const styles = tv({
    variants: {
      size: styleVariants.textSize,
    },
  });
</script>

<Text tag={inline ? 'span' : 'p'} {color} {fontWeight} class={cleanClass(styles({ size }), className)} {...restProps} />
