<script lang="ts">
  import { commandPaletteManager, type ActionProvider } from '$lib/services/command-palette-manager.svelte.js';

  type Props = {
    providers: ActionProvider[];
  };

  const { providers }: Props = $props();

  $effect(() => {
    const callbacks: Array<() => void> = [];
    for (const provider of providers) {
      callbacks.push(commandPaletteManager.addProvider(provider));
    }

    return () => callbacks.forEach((callback) => callback());
  });
</script>
