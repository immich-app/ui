<script lang="ts">
  import Icon from '$lib/components/Icon/Icon.svelte';
  import IconButton from '$lib/components/IconButton/IconButton.svelte';
  import Text from '$lib/components/Text/Text.svelte';
  import { commandPaletteManager } from '$lib/services/command-palette-manager.svelte.js';
  import { t } from '$lib/services/translation.svelte.js';
  import type { TranslationProps } from '$lib/types.js';
  import { mdiMagnify } from '@mdi/js';

  type Props = {
    translations?: TranslationProps<'search_placeholder'>;
  };

  const { translations }: Props = $props();
</script>

{#if commandPaletteManager.isEnabled}
  <div class="hidden place-items-center lg:flex">
    <button
      onclick={() => commandPaletteManager.open()}
      class="border-light flex cursor-pointer place-items-center gap-2 rounded-2xl bg-gray-200 px-4 py-1.5 text-sm dark:bg-neutral-700"
    >
      <Icon icon={mdiMagnify} size="1.25rem" />
      <Text>{t('search_placeholder', translations)}</Text>
      <span class="rounded-lg bg-white px-2 py-0.5 dark:bg-neutral-900">/</span>
    </button>
  </div>
  <IconButton
    icon={mdiMagnify}
    shape="round"
    variant="ghost"
    color="secondary"
    aria-label="Search"
    class="lg:hidden"
    onclick={() => commandPaletteManager.open()}
  />
{/if}
