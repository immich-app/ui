<script lang="ts">
  import { commandPaletteManager } from '$lib/services/command-palette-manager.svelte';
  import type { ActionProvider } from '$lib/types.js';
  import { onMount } from 'svelte';

  type Props = {
    providers: ActionProvider[];
  };

  const { providers }: Props = $props();

  onMount(() => {
    return commandPaletteManager.registerProviders(providers);
  });
</script>
