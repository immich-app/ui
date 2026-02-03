<script lang="ts">
  import { ChildKey } from '$lib/constants.js';
  import Child from '$lib/internal/Child.svelte';
  import type { ChildData } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import { tv } from 'tailwind-variants';

  type Props = {
    border?: boolean;
  } & ChildData;

  let { border = true, class: className, children }: Props = $props();

  const styles = tv({
    base: 'min-h-control-bar-container flex items-center gap-2',
    variants: {
      border: {
        true: 'border-b',
        false: '',
      },
    },
  });
</script>

<Child for={ChildKey.AppShell} as={ChildKey.AppShellHeader}>
  <header class={cleanClass(styles({ border }), className)}>
    {@render children?.()}
  </header>
</Child>
