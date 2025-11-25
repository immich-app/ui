<script lang="ts">
  import { commandPaletteManager } from '$lib/services/command-palette-manager.svelte';
  import type { ActionItem } from '$lib/types.js';
  import { untrack } from 'svelte';

  type Props = {
    commands?: ActionItem[];
  };

  const { commands = [] }: Props = $props();

  $effect(() => {
    // prevent reactivity loop
    const addCommands = (commands: ActionItem[]) => untrack(() => commandPaletteManager.addCommands(commands));

    return addCommands(commands);
  });
</script>
