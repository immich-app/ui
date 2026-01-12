<script lang="ts">
  import { cleanClass } from '$lib/utilities/internal.js';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLTableCellElement>;

  const { class: className, children, ...restProps }: Props = $props();
</script>

<th class={cleanClass('w-full px-4 py-2', className)} {...restProps}>
  {@render children?.()}
</th>
