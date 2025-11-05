<script lang="ts">
  import { shortcuts } from '$lib/actions/shortcut.js';
  import { commandPaletteManager, type CommandItem } from '$lib/services/command-palette-manager.svelte';
  import { onMount } from 'svelte';

  type Props = {
    commands?: CommandItem[];
    global?: boolean;
  };

  const { commands = [], global }: Props = $props();

  const handleOpen = () => commandPaletteManager.open();

  onMount(() => commandPaletteManager.addCommands(commands, { global }));
</script>

<svelte:window
  use:shortcuts={[
    { shortcut: { key: 'k', meta: true }, onShortcut: handleOpen },
    { shortcut: { key: 'k', ctrl: true }, onShortcut: handleOpen },
    { shortcut: { key: '/' }, preventDefault: true, onShortcut: handleOpen },
  ]}
/>
