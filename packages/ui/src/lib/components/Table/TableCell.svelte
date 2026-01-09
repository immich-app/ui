<script lang="ts">
  import { getTableContext } from '$lib/common/context.svelte.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import type { Snippet } from 'svelte';
  import { tv } from 'tailwind-variants';

  type Props = {
    class?: string;
    children?: Snippet;
  };

  const { class: className, children }: Props = $props();

  const context = getTableContext();

  const { spacing } = $derived(context());

  const styles = tv({
    base: 'line-clamp-3 w-full overflow-hidden py-2 break-all text-ellipsis',
    variants: {
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

<td class={cleanClass(styles({ spacing }), className)}>
  {@render children?.()}
</td>
