<script lang="ts">
  import type { StackProps } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import { tv } from 'tailwind-variants';

  const {
    align,
    direction = 'column',
    wrap = false,
    class: className,
    fullWidth,
    fullHeight,
    gap = 2,
    children,
  }: StackProps = $props();

  const styles = tv({
    base: 'flex gap-2',
    variants: {
      direction: {
        row: 'flex-row',
        column: 'flex-col',
      },
      align: {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
      fullHeight: {
        true: 'h-full',
        false: '',
      },
      gap: {
        0: 'gap-0',
        1: 'gap-1',
        2: 'gap-2',
        3: 'gap-3',
        4: 'gap-4',
        5: 'gap-5',
        6: 'gap-6',
        7: 'gap-7',
        8: 'gap-8',
      },
      wrap: {
        true: 'flex-wrap',
        false: '',
      },
    },
  });
</script>

<div
  class={cleanClass(
    styles({
      align,
      direction,
      gap,
      wrap,
      fullHeight,
      fullWidth,
    }),
    className,
  )}
>
  {@render children()}
</div>
