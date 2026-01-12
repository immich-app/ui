<script lang="ts">
  import { getTableContext } from '$lib/common/context.svelte.js';
  import { styleVariants } from '$lib/styles.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  type Props = {
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLTableCellElement>;

  const { class: className, children, ...restProps }: Props = $props();

  const context = getTableContext();

  const { spacing, size } = $derived(context());

  const styles = tv({
    base: 'line-clamp-3 w-full overflow-hidden py-2 break-all text-ellipsis',
    variants: {
      size: styleVariants.textSize,
      spacing: {
        tiny: 'px-0.5',
        small: 'px-1',
        medium: 'px-2',
        large: 'px-2',
        giant: 'px-2',
      },
    },
  });
</script>

<td class={cleanClass(styles({ spacing, size }), className)} {...restProps}>
  {@render children?.()}
</td>
