<script lang="ts">
  import { setTableContext } from '$lib/common/context.svelte.js';
  import { withChildrenSnippets } from '$lib/common/use-child.svelte.js';
  import { ChildKey } from '$lib/constants.js';
  import { styleVariants } from '$lib/styles.js';
  import type { TableContext } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import { type Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { tv } from 'tailwind-variants';
  type Props = {
    class?: string;
    ref?: HTMLTableElement | null;
    children?: Snippet;
  } & TableContext &
    Omit<HTMLAttributes<HTMLTableElement>, 'color' | 'size'>;

  let { ref = $bindable(null), class: className, striped = false, spacing, children, ...restProps }: Props = $props();

  setTableContext(() => ({ spacing, striped }));

  const { getChildren: getChildSnippet } = withChildrenSnippets(ChildKey.Table);
  const headerChild = $derived(getChildSnippet(ChildKey.TableHeader));
  const bodyChild = $derived(getChildSnippet(ChildKey.TableBody));
  const footerChild = $derived(getChildSnippet(ChildKey.TableFooter));

  const headerRowStyles = tv({
    base: 'bg-dark-900 flex w-full place-items-center',
    variants: {
      spacing: styleVariants.tableSpacing,
    },
  });
</script>

<table bind:this={ref} class={cleanClass('w-full text-center', className)} {...restProps}>
  {#if headerChild}
    <thead class="text-primary mb-4 flex w-full overflow-hidden rounded-md border">
      <tr class={headerRowStyles({ spacing })}>
        {@render headerChild?.snippet()}
      </tr>
    </thead>
  {/if}

  {#if bodyChild}
    <tbody class={cleanClass('block w-full overflow-y-auto rounded-md border', bodyChild.class)}>
      {@render bodyChild?.snippet()}
    </tbody>
  {/if}

  {@render children?.()}
</table>

{#if footerChild}
  <div class="text-primary bg-subtle mt-4 flex h-12 w-full place-items-center rounded-md border p-4">
    {@render footerChild?.snippet()}
  </div>
{/if}
