<script lang="ts">
  import { shortcuts } from '$lib/actions/shortcut.js';
  import CloseButton from '$lib/components/CloseButton/CloseButton.svelte';
  import CommandPaletteItem from '$lib/components/CommandPalette/CommandPaletteItem.svelte';
  import Heading from '$lib/components/Heading/Heading.svelte';
  import Icon from '$lib/components/Icon/Icon.svelte';
  import Input from '$lib/components/Input/Input.svelte';
  import Modal from '$lib/components/Modal/Modal.svelte';
  import ModalBody from '$lib/components/Modal/ModalBody.svelte';
  import ModalFooter from '$lib/components/Modal/ModalFooter.svelte';
  import ModalHeader from '$lib/components/Modal/ModalHeader.svelte';
  import Stack from '$lib/components/Stack/Stack.svelte';
  import Text from '$lib/components/Text/Text.svelte';
  import {
    commandPaletteManager,
    type CommandPaletteTranslations,
  } from '$lib/services/command-palette-manager.svelte.js';
  import { t } from '$lib/services/translation.svelte.js';
  import type { ActionItem } from '$lib/types.js';
  import { mdiArrowDown, mdiArrowUp, mdiKeyboardEsc, mdiKeyboardReturn, mdiMagnify } from '@mdi/js';

  type Props = {
    onClose: (action?: ActionItem) => void;
    translations?: CommandPaletteTranslations;
    initialQuery?: string;
  };

  const { onClose, translations, initialQuery = '' }: Props = $props();

  let query = $state(initialQuery);

  $effect(() => commandPaletteManager.queryUpdate(query));

  const handleUp = (event: KeyboardEvent) => handleNavigate(event, 'up');
  const handleDown = (event: KeyboardEvent) => handleNavigate(event, 'down');
  const handleSelect = (event: KeyboardEvent) => handleNavigate(event, 'select');
  const handleNavigate = async (event: KeyboardEvent, direction: 'up' | 'down' | 'select') => {
    event.preventDefault();

    switch (direction) {
      case 'up': {
        commandPaletteManager.navigateUp();
        break;
      }

      case 'down': {
        if (!query && commandPaletteManager.results.length === 0) {
          commandPaletteManager.loadAllItems();
          break;
        }

        commandPaletteManager.navigateDown();
        break;
      }

      case 'select': {
        onClose(commandPaletteManager.selectedItem);
        break;
      }
    }
  };
</script>

<svelte:window
  use:shortcuts={[
    { shortcut: { key: 'ArrowUp' }, preventDefault: false, ignoreInputFields: false, onShortcut: handleUp },
    { shortcut: { key: 'ArrowDown' }, preventDefault: false, ignoreInputFields: false, onShortcut: handleDown },
    { shortcut: { key: 'k', ctrl: true }, ignoreInputFields: false, onShortcut: handleUp },
    { shortcut: { key: 'k', meta: true }, ignoreInputFields: false, onShortcut: handleUp },
    { shortcut: { key: 'j', ctrl: true }, ignoreInputFields: false, onShortcut: handleDown },
    { shortcut: { key: 'j', meta: true }, ignoreInputFields: false, onShortcut: handleDown },
    { shortcut: { key: 'Enter' }, ignoreInputFields: false, onShortcut: handleSelect },
  ]}
/>

<Modal size="large" {onClose} closeOnBackdropClick class="max-h-[85vh] lg:max-h-[75vh]">
  <ModalHeader>
    <div class="flex place-items-center gap-1">
      <Input
        bind:value={query}
        placeholder={t('search_placeholder', translations)}
        leadingIcon={mdiMagnify}
        tabindex={1}
      />
      <div>
        <CloseButton onclick={() => onClose()} class="md:hidden" />
      </div>
    </div>
  </ModalHeader>
  <ModalBody>
    <Stack gap={2}>
      {#if query}
        {#if commandPaletteManager.results.length === 0}
          <Text>{t('search_no_results', translations)}</Text>
        {/if}
      {:else}
        <Text>{t('command_palette_prompt_default', translations)}</Text>
      {/if}

      {#each commandPaletteManager.results as result, groupIndex (result.provider.name ?? groupIndex)}
        {#if result.provider.name}
          <Heading size="tiny" class="pt-2">{result.provider.name}</Heading>
        {/if}
        {#if commandPaletteManager.results.length > 0}
          <div class="flex flex-col">
            {#each result.items as item (item.id)}
              <CommandPaletteItem
                {item}
                selected={commandPaletteManager.isSelected(item)}
                onSelect={() => onClose(item)}
              />
            {/each}
          </div>
        {/if}
      {/each}
    </Stack>
  </ModalBody>
  <ModalFooter>
    <div class="flex w-full justify-around">
      {#if !query && commandPaletteManager.results.length === 0}
        <div class="flex place-items-center gap-1">
          <span class="flex gap-1 rounded bg-gray-300 p-1 dark:bg-gray-500">
            <Icon icon={mdiArrowDown} size="1rem" />
          </span>
          <Text size="small">{t('command_palette_to_show_all', translations)}</Text>
        </div>
      {:else}
        <div class="flex gap-4">
          <div class="flex place-items-center gap-1">
            <span class="rounded bg-gray-300 p-1 dark:bg-gray-500">
              <Icon icon={mdiKeyboardReturn} size="1rem" />
            </span>
            <Text size="small">{t('command_palette_to_select', translations)}</Text>
          </div>

          <div class="flex place-items-center gap-1">
            <span class="flex gap-1 rounded bg-gray-300 p-1 dark:bg-gray-500">
              <Icon icon={mdiArrowUp} size="1rem" />
              <Icon icon={mdiArrowDown} size="1rem" />
            </span>
            <Text size="small">{t('command_palette_to_navigate', translations)}</Text>
          </div>

          <div class="flex place-items-center gap-1">
            <span class="rounded bg-gray-300 p-1 dark:bg-gray-500">
              <Icon icon={mdiKeyboardEsc} size="1rem" />
            </span>
            <Text size="small">{t('command_palette_to_close', translations)}</Text>
          </div>
        </div>
      {/if}
    </div>
  </ModalFooter>
</Modal>
