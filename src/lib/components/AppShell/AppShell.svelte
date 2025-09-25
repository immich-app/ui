<script lang="ts">
  import { withChildrenSnippets } from '$lib/common/use-child.svelte.js';
  import Scrollable from '$lib/components/Scrollable/Scrollable.svelte';
  import { ChildKey } from '$lib/constants.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import type { Snippet } from 'svelte';

  type Props = {
    class?: string;
    children?: Snippet;
  };

  const { class: className, children }: Props = $props();

  const { getChildren: getChildSnippet } = withChildrenSnippets(ChildKey.AppShell);
  const header = $derived(getChildSnippet(ChildKey.AppShellHeader));
  const sidebar = $derived(getChildSnippet(ChildKey.AppShellSidebar));
</script>

<div class={cleanClass('flex h-dvh flex-col overflow-hidden', className)}>
  {#if header}
    <header class="border-b">
      {@render header?.snippet()}
    </header>
  {/if}
  <div class="relative flex w-full grow overflow-y-auto">
    {#if sidebar}
      {@render sidebar?.snippet()}
    {/if}
    <Scrollable class="grow" resetOnNavigate>
      {@render children?.()}
    </Scrollable>
  </div>
</div>
