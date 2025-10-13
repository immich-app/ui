<script lang="ts">
  import Scrollable from '$lib/components/Scrollable/Scrollable.svelte';
  import { ChildKey, zIndex } from '$lib/constants.js';
  import Child from '$lib/internal/Child.svelte';
  import { cleanClass } from '$lib/utilities/internal.js';
  import { type Snippet } from 'svelte';

  type Props = {
    class?: string;
    children: Snippet;
    open?: boolean;
  };

  let { class: className, children, open = $bindable(true) }: Props = $props();
</script>

<Child for={ChildKey.AppShell} as={ChildKey.AppShellSidebar}>
  <Scrollable
    class={cleanClass(
      'bg-light text-dark absolute shrink-0 border-e shadow-lg transition-all duration-200 md:relative',
      open ? `${zIndex.AppShellSidebar} w-[min(100vw,16rem)]` : 'w-[0px] border-e-0',
      className,
    )}
  >
    {@render children?.()}
  </Scrollable>
</Child>
