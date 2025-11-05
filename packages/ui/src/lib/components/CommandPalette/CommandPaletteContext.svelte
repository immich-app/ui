<script lang="ts">
  import { commandPaletteManager, type CommandItem } from '$lib/services/command-palette-manager.svelte';
  import { onMount } from 'svelte';

  type Props = {
    commands?: CommandItem[];
    global?: boolean;
  };

  const { commands = [], global }: Props = $props();

  onMount(() => commandPaletteManager.addCommands(commands, { global }));
</script>
