<script lang="ts">
  import type { Color, Size } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  type Props = {
    size?: Size;
    color?: Color;
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLElement>;

  const { class: className, size = 'small', children, ...restProps }: Props = $props();

  const styles = tv({
    base: 'bg-subtle text-dark flex flex-col rounded-md border border-b-2 px-1 font-mono shadow',
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

<kbd class={cleanClass(styles({ size }), className)} {...restProps}>
  {@render children?.()}
</kbd>
