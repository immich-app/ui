<script lang="ts">
  import { styleVariants } from '$lib/styles.js';
  import type { Color, Shape, Size } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import type { Snippet } from 'svelte';
  import { tv } from 'tailwind-variants';

  type Props = {
    progress: number;
    size?: Size;
    shape?: Shape;
    color?: Color;
    class?: string;
    children?: Snippet;
  };

  let { progress, shape = 'round', size = 'medium', color = 'primary', class: className, children }: Props = $props();

  const containerStyles = tv({
    base: 'bg-light-100 dark:bg-light-200 dark:border-light-300 relative w-full overflow-hidden border',
    variants: {
      shape: styleVariants.shape,
      size: {
        tiny: 'h-3',
        small: 'h-4',
        medium: 'h-5',
        large: 'h-6',
        giant: 'h-12',
      },
      roundedSize: {
        tiny: 'rounded-sm',
        small: 'rounded-md',
        medium: 'rounded-md',
        large: 'rounded-lg',
        giant: 'rounded-xl',
      },
    },
  });

  const barStyles = tv({
    base: 'h-full transition-all duration-700 ease-in-out',
    variants: {
      color: styleVariants.filledColor,
      shape: styleVariants.shape,
    },
  });
</script>

<div
  class={cleanClass(
    containerStyles({ size, shape, roundedSize: shape === 'semi-round' ? size : undefined }),
    className,
  )}
>
  <div class="absolute flex h-full w-full items-center justify-center">
    {@render children?.()}
  </div>
  <div class={cleanClass(barStyles({ color, shape }))} style="width: {progress * 100}%"></div>
</div>
