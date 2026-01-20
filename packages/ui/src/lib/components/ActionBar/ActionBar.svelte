<script lang="ts">
  import ActionButton from '$lib/components/ActionButton/ActionButton.svelte';
  import ContextMenuButton from '$lib/components/ContextMenu/ContextMenuButton.svelte';
  import ControlBar from '$lib/components/ControlBar/ControlBar.svelte';
  import ControlBarOverflow from '$lib/components/ControlBar/ControlBarOverflow.svelte';
  import type { ActionBarProps } from '$lib/types.js';
  import { isEnabled } from '$lib/utilities/common.js';

  const { actions, overflowActions = [], children, ...restProps }: ActionBarProps = $props();

  const items = $derived(overflowActions.filter((action) => isEnabled(action)));
</script>

<ControlBar {...restProps}>
  {@render children?.()}
  <ControlBarOverflow>
    {#each actions as action, i (i)}
      <ActionButton {action} />
    {/each}
    <ContextMenuButton {items} />
  </ControlBarOverflow>
</ControlBar>
