<script lang="ts">
  import CommandPaletteProvider from '$lib/components/CommandPalette/CommandPaletteProvider.svelte';
  import { defaultProvider } from '$lib/services/command-palette-manager.svelte.js';
  import type { ActionItem } from '$lib/types.js';

  type Props = {
    name?: string;
    actions?: ActionItem[];
  };

  const { name, actions = [] }: Props = $props();
</script>

<CommandPaletteProvider providers={[defaultProvider({ name, actions })]} />
