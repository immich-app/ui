<script lang="ts">
  import { zIndex } from '$lib/constants.js';
  import { Tooltip } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { fly } from 'svelte/transition';

  type Props = Tooltip.RootProps & {
    text?: string | null;
    child: Snippet<[{ props: Record<string, unknown> }]>;
  };

  let { open = $bindable(false), child, text, ...restProps }: Props = $props();
</script>

{#if text}
  <Tooltip.Root bind:open {...restProps}>
    <Tooltip.Trigger {child} />
    <Tooltip.Portal>
      <Tooltip.Content
        sideOffset={8}
        forceMount
        class="bg-light-800 text-light {zIndex.Tooltip} rounded-lg px-3.5 py-2 text-xs shadow-lg"
      >
        {#snippet child({ wrapperProps, props, open })}
          {#if open}
            <div {...wrapperProps}>
              <div {...props} transition:fly={{ y: 4, duration: 150 }}>
                {text}
              </div>
            </div>
          {/if}
        {/snippet}
      </Tooltip.Content>
    </Tooltip.Portal>
  </Tooltip.Root>
{:else}
  {@render child({ props: {} })}
{/if}
