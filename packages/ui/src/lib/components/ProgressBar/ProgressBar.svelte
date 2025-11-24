<script lang="ts">
  import { styleVariants } from '$lib/styles.js';
  import type { Color, Size } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import { tv } from 'tailwind-variants';

  interface Props {
    size?: Size;
    progress?: number;
    color?: Color;
    class?: string;
  }

  let { progress = 0, size = 'medium', color = 'primary', class: className }: Props = $props();

  const styles = tv({
    base: 'fill-primary w-64 w-80 overflow-hidden rounded-full bg-gray-200 dark:bg-white',
    variants: {
      size: {
        tiny: 'h-3',
        small: 'h-4',
        medium: 'h-5',
        large: 'h-6',
        giant: 'h-12',
      },
    },
  });

  const barStyles = tv({
    base: 'h-full transition-all duration-700',
    variants: {
      color: styleVariants.filledColor,
    },
  });
</script>

<div class={cleanClass(styles({ size }), className)}>
  <div class={cleanClass(barStyles({ color }))} style="width: {progress * 100}%"></div>
</div>
