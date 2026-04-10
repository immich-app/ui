<script lang="ts">
  import { getDocsProviders } from '$docs/constants.js';
  import '$lib/theme/default.css';
  import {
    commandPaletteManager,
    CommandPaletteProvider,
    getSiteProviders,
    ScreencastOverlay,
    toastManager,
    TooltipProvider,
  } from '@immich/ui';
  import '../app.css';

  let { children } = $props();

  toastManager.setOptions({ class: 'top-[58px]' });

  commandPaletteManager.enable();
  commandPaletteManager.setTranslations({
    command_palette_prompt_default: 'Quickly find components, links, and commands',
  });
</script>

<CommandPaletteProvider providers={[...getDocsProviders(), ...getSiteProviders()]} />
<ScreencastOverlay />

<TooltipProvider>
  {@render children?.()}
</TooltipProvider>
