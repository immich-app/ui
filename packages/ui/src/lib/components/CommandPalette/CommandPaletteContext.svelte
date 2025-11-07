<script lang="ts">
  import { commandPaletteManager, type CommandItem } from '$lib/services/command-palette-manager.svelte';
  import { untrack } from 'svelte';

  type Props = {
    commands?: CommandItem[];
    global?: boolean;
  };

  const { commands = [], global }: Props = $props();

  $effect(() => {
    // prevent reactivity loop
    const addCommands = (commands: CommandItem[], global?: boolean) =>
      untrack(() => commandPaletteManager.addCommands(commands, { global }));

    return addCommands(commands, global);
  });
</script>
