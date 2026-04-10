<script lang="ts">
  import CommandPaletteProvider from '$lib/components/CommandPalette/CommandPaletteProvider.svelte';
  import { defaultProvider, type ActionDefaultProviderOptions } from '$lib/services/command-palette-manager.svelte.js';

  const options: ActionDefaultProviderOptions = $props();
</script>

<CommandPaletteProvider providers={[defaultProvider(options)]} />
