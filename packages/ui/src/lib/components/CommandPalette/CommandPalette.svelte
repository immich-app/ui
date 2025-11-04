<script lang="ts">
  import { shortcuts } from '$lib/actions/shortcut.js';
  import { commandPaletteManager } from '$lib/services/command-palette-manager.svelte';

  const handleOpen = () => commandPaletteManager.open();
</script>

<svelte:window
  use:shortcuts={[
    { shortcut: { key: 'k', meta: true }, onShortcut: handleOpen },
    { shortcut: { key: 'k', ctrl: true }, onShortcut: handleOpen },
    { shortcut: { key: '/' }, preventDefault: true, onShortcut: handleOpen },
  ]}
/>
