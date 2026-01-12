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
    rounded?: boolean;
    shape?: 'semi-round' | 'rectangle';
    border?: boolean;
    children?: Snippet;
  } & TableContext &
    Omit<HTMLAttributes<HTMLTableElement>, 'color' | 'size'>;

  let {
    ref = $bindable(null),
    class: className,
    size,
    striped = false,
    spacing,
    border = true,
    shape = 'semi-round',
    children,
    ...restProps
  }: Props = $props();

  setTableContext(() => ({ spacing, striped, size }));

  const { getChildren: getChildSnippet } = withChildrenSnippets(ChildKey.Table);
  const headerChild = $derived(getChildSnippet(ChildKey.TableHeader));
  const bodyChild = $derived(getChildSnippet(ChildKey.TableBody));
  const footerChild = $derived(getChildSnippet(ChildKey.TableFooter));

  const headerRowStyles = tv({
    base: 'bg-dark-900 flex w-full place-items-center',
    variants: {
      spacing: styleVariants.tableSpacing,
      shape: {
        'semi-round': 'rounded-md',
        rectangle: 'rounded-none',
      },
    },
  });

  const commonStyles = tv({
    base: '',
    variants: {
      shape: {
        'semi-round': 'rounded-md',
        rectangle: 'rounded-none',
      },
      border: {
        true: 'border',
        false: '',
      },
    },
  });
</script>

<table bind:this={ref} class={cleanClass('w-full text-center', className)} {...restProps}>
  {#if headerChild}
    <thead class={cleanClass('text-primary mb-4 flex w-full overflow-hidden', commonStyles({ shape, border }))}>
      <tr class={headerRowStyles({ spacing })}>
        {@render headerChild?.snippet()}
      </tr>
    </thead>
  {/if}

  {#if bodyChild}
    <tbody class={cleanClass('block w-full overflow-y-auto', bodyChild.class, commonStyles({ shape, border }))}>
      {@render bodyChild?.snippet()}
    </tbody>
  {/if}

  {@render children?.()}
</table>

{#if footerChild}
  <div
    class={cleanClass(
      'text-primary bg-subtle mt-4 flex h-12 w-full place-items-center p-4',
      commonStyles({ shape, border }),
    )}
  >
    {@render footerChild?.snippet()}
  </div>
{/if}
