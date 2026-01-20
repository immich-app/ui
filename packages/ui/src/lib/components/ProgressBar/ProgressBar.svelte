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
    border?: boolean;
    class?: string;
    children?: Snippet;
  };

  let {
    progress,
    shape = 'round',
    size = 'medium',
    color = 'primary',
    border = false,
    class: className,
    children,
  }: Props = $props();

  const containerStyles = tv({
    base: 'bg-light-100 dark:bg-light-200 relative w-full overflow-hidden',
    variants: {
      shape: styleVariants.shape,
      size: {
        tiny: 'h-2',
        small: 'h-3',
        medium: 'h-4',
        large: 'h-5',
        giant: 'h-7',
      },
      roundedSize: {
        tiny: 'rounded-sm',
        small: 'rounded-md',
        medium: 'rounded-md',
        large: 'rounded-lg',
        giant: 'rounded-xl',
      },
      border: {
        true: 'dark:border-light-300 border',
      },
    },
  });

  const barStyles = tv({
    base: 'h-full transition-all duration-700 ease-in-out',
    variants: {
      color: styleVariants.filledColor,
      shape: styleVariants.shape,
      size: {
        tiny: 'min-w-2',
        small: 'min-w-3',
        medium: 'min-w-4',
        large: 'min-w-5',
        giant: 'min-w-7',
      },
    },
  });
</script>

<div
  class={cleanClass(
    containerStyles({ size, shape, roundedSize: shape === 'semi-round' ? size : undefined, border }),
    className,
  )}
>
  <div class="absolute flex h-full w-full items-center justify-center">
    {@render children?.()}
  </div>
  <div
    class={cleanClass(barStyles({ size: progress > 0 ? size : undefined, color, shape }))}
    style="width: {progress * 100}%"
  ></div>
</div>
