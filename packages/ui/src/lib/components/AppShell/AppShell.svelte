<script lang="ts">
  import { setChildContext } from '$lib/common/context.svelte.js';
  import Scrollable from '$lib/components/Scrollable/Scrollable.svelte';
  import { ChildKey, zIndex } from '$lib/constants.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import type { Snippet } from 'svelte';

  type Props = {
    class?: string;
    children?: Snippet;
  };

  const { class: className, children }: Props = $props();

  const { getByKey } = setChildContext(ChildKey.AppShell);
  const bar = $derived(getByKey(ChildKey.AppShellBar));
  const header = $derived(getByKey(ChildKey.AppShellHeader));
  const sidebar = $derived(getByKey(ChildKey.AppShellSidebar));
</script>

<div class={cleanClass('flex h-dvh flex-col overflow-hidden', className)}>
  {#if bar}
    <div class={cleanClass('min-h-control-bar-container px-2 pt-2', zIndex.AppShellBar, bar.class)}>
      {@render bar.children?.()}
    </div>
  {:else if header}
    {@render header.children?.()}
  {/if}
  <div class="relative flex w-full grow overflow-y-auto">
    {#if sidebar}
      {@render sidebar.children?.()}
    {/if}
    <Scrollable class="grow" resetOnNavigate>
      {@render children?.()}
    </Scrollable>
  </div>
</div>
