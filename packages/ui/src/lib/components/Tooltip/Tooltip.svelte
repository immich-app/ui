<script lang="ts">
  import { zIndex } from '$lib/constants.js';
  import { Tooltip } from 'bits-ui';
  import type { Snippet } from 'svelte';

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
        class="tooltip-content bg-light-800 text-light {zIndex.Tooltip} rounded-lg px-3.5 py-2 text-xs shadow-lg"
      >
        {text}
      </Tooltip.Content>
    </Tooltip.Portal>
  </Tooltip.Root>
{:else}
  {@render child({ props: {} })}
{/if}

<style>
  :global(.tooltip-content[data-state='delayed-open']),
  :global(.tooltip-content[data-state='instant-open']) {
    animation: tooltip-enter 150ms ease-out;
  }

  @keyframes tooltip-enter {
    from {
      opacity: 0;
      transform: translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
