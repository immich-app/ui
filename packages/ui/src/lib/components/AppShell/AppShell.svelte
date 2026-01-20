<script lang="ts">
  import { withChildrenSnippets } from '$lib/common/use-child.svelte.js';
  import Scrollable from '$lib/components/Scrollable/Scrollable.svelte';
  import { ChildKey, zIndex } from '$lib/constants.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import type { Snippet } from 'svelte';

  type Props = {
    class?: string;
    children?: Snippet;
  };

  const { class: className, children }: Props = $props();

  const { getChildren: getChildSnippet } = withChildrenSnippets(ChildKey.AppShell);
  const bar = $derived(getChildSnippet(ChildKey.AppShellBar));
  const header = $derived(getChildSnippet(ChildKey.AppShellHeader));
  const sidebar = $derived(getChildSnippet(ChildKey.AppShellSidebar));
</script>

<div class={cleanClass('flex h-dvh flex-col overflow-hidden', className)}>
  {#if bar}
    <div class={cleanClass('h-control-bar-container px-2 pt-2', zIndex.AppShellBar, bar.class)}>
      {@render bar.snippet()}
    </div>
  {:else if header}
    <header class={cleanClass('h-control-bar-container flex items-center gap-2 border-b', header.class)}>
      {@render header.snippet()}
    </header>
  {/if}
  <div class="relative flex w-full grow overflow-y-auto">
    {#if sidebar}
      {@render sidebar.snippet()}
    {/if}
    <Scrollable class="grow" resetOnNavigate>
      {@render children?.()}
    </Scrollable>
  </div>
</div>
