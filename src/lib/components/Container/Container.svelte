<script lang="ts">
  import type { Size } from '$lib/types.js';
  import { cleanClass } from '$lib/utils.js';
  import type { Snippet } from 'svelte';
  import { tv } from 'tailwind-variants';

  type Props = {
    size?: Size | 'full';
    class?: string;
    center?: boolean;
    children?: Snippet;
  };

  const { center, class: className, size = 'full', children }: Props = $props();

  const styles = tv({
    base: '',
    variants: {
      size: {
        tiny: 'max-w-lg',
        small: 'max-w-(--breakpoint-sm)',
        medium: 'max-w-(--breakpoint-md)',
        large: 'max-w-(--breakpoint-lg)',
        giant: 'max-w-(--breakpoint-xl)',
        full: 'w-full',
      },
    },
  });
</script>

<div class={cleanClass(styles({ size }), center && 'mx-auto w-full', className)}>
  {@render children?.()}
</div>
