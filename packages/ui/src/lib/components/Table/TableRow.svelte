<script lang="ts">
  import { getTableContext } from '$lib/common/context.svelte.js';
  import { styleVariants } from '$lib/styles.js';
  import type { Color } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  type Props = {
    class?: string;
    children?: Snippet;
    center?: boolean;
    color?: Color;
  } & HTMLAttributes<HTMLTableRowElement>;

  const { color, class: className, children, ...restProps }: Props = $props();

  const context = getTableContext();

  const { spacing, striped } = $derived(context());

  const styles = tv({
    base: 'flex w-full place-items-center',
    variants: {
      striped: {
        true: 'odd:bg-dark-900 even:bg-dark-950',
        false: '',
      },
      color: {
        primary: 'bg-primary-100',
        secondary: 'bg-light-200 dark:bg-light-300',
        muted: 'bg-subtle text-subtle dark:bg-subtle',
        info: 'bg-info-100',
        warning: 'bg-warning-100',
        danger: 'bg-danger-100',
        success: 'bg-success-100',
      },
      spacing: styleVariants.tableSpacing,
    },
  });
</script>

<tr class={cleanClass(styles({ color, striped, spacing }), className)} {...restProps}>
  {@render children?.()}
</tr>
