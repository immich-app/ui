<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    title?: string | undefined;
    description?: string | undefined;
    scrollbar?: boolean;
    buttons?: Snippet;
    children?: Snippet;
  }

  let { title = undefined, description = undefined, scrollbar = true, buttons, children }: Props = $props();

  let scrollbarClass = $derived(scrollbar ? 'immich-scrollbar p-2 pb-8' : 'scrollbar-hidden');
  let hasTitleClass = $derived(title ? 'top-16 h-[calc(100%-(--spacing(16)))]' : 'top-0 h-full');
</script>

<section class="relative">
  {#if title || buttons}
    <div
      class="dark:border-immich-neutral dark:text-immich-dark-fg absolute flex h-16 w-full place-items-center justify-between border-b p-4"
    >
      <div class="flex items-center gap-2">
        {#if title}
          <div class="font-medium" tabindex="-1">{title}</div>
        {/if}
        {#if description}
          <p class="text-sm text-gray-400 dark:text-gray-600">{description}</p>
        {/if}
      </div>
      {@render buttons?.()}
    </div>
  {/if}

  <div class="{scrollbarClass} scrollbar-stable absolute {hasTitleClass} w-full overflow-y-auto">
    {@render children?.()}
  </div>
</section>
