<script lang="ts">
  import { Tooltip } from 'bits-ui';
  import type { Snippet } from 'svelte';

  type Props = {
    delayDuration?: number;
    children?: Snippet;
  };

  const { children, delayDuration }: Props = $props();
</script>

<Tooltip.Provider disableCloseOnTriggerClick ignoreNonKeyboardFocus {delayDuration}>
  {@render children?.()}
</Tooltip.Provider>
