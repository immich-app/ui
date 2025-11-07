<script lang="ts">
  import { shortcuts } from '$lib/actions/shortcut.js';
  import CloseButton from '$lib/components/CloseButton/CloseButton.svelte';
  import CommandPaletteItem from '$lib/components/CommandPalette/CommandPaletteItem.svelte';
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
  import { mdiArrowDown, mdiArrowUp, mdiKeyboardEsc, mdiKeyboardReturn, mdiMagnify } from '@mdi/js';

  type Props = {
    onClose: () => void;
    translations?: CommandPaletteTranslations;
  };

  const handleUp = (event: KeyboardEvent) => handleNavigate(event, 'up');
  const handleDown = (event: KeyboardEvent) => handleNavigate(event, 'down');
  const handleSelect = (event: KeyboardEvent) => handleNavigate(event, 'select');
  const handleNavigate = async (event: KeyboardEvent, direction: 'up' | 'down' | 'select') => {
    event.preventDefault();

    switch (direction) {
      case 'up': {
        commandPaletteManager.up();
        break;
      }

      case 'down': {
        commandPaletteManager.down();
        break;
      }

      case 'select': {
        await commandPaletteManager.select();
        break;
      }
    }
  };

  const { onClose, translations }: Props = $props();
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

<Modal size="large" {onClose} closeOnBackdropClick>
  <ModalHeader>
    <div class="flex place-items-center gap-1">
      <Input
        bind:value={commandPaletteManager.query}
        placeholder={t('search_placeholder', translations)}
        leadingIcon={mdiMagnify}
        tabindex={1}
      />
      <div>
        <CloseButton onclick={() => commandPaletteManager.close()} class="md:hidden" />
      </div>
    </div>
  </ModalHeader>
  <ModalBody>
    <Stack gap={2}>
      {#if commandPaletteManager.query}
        {#if commandPaletteManager.results.length === 0}
          <Text>{t('search_no_results', translations)}</Text>
        {/if}
      {:else if commandPaletteManager.recentItems.length > 0}
        <Text>{t('search_recently_used', translations)}</Text>
      {:else}
        <Text>{t('command_palette_prompt_default', translations)}</Text>
      {/if}

      {#if commandPaletteManager.results.length > 0}
        <div class="flex flex-col">
          {#each commandPaletteManager.results as item, i (item.id)}
            <CommandPaletteItem
              {item}
              selected={commandPaletteManager.selectedIndex === i}
              onRemove={commandPaletteManager.query ? undefined : () => commandPaletteManager.remove(i)}
              onSelect={() => commandPaletteManager.select(i)}
            />
          {/each}
        </div>
      {/if}
    </Stack>
  </ModalBody>
  <ModalFooter>
    <div class="flex w-full justify-around">
      <div class="flex gap-4">
        <div class="flex place-items-center gap-1">
          <span class="rounded bg-gray-300 p-1 dark:bg-gray-500">
            <Icon icon={mdiKeyboardReturn} size="1rem" />
          </span>
          <Text size="small">to select</Text>
        </div>

        <div class="flex place-items-center gap-1">
          <span class="flex gap-1 rounded bg-gray-300 p-1 dark:bg-gray-500">
            <Icon icon={mdiArrowUp} size="1rem" />
            <Icon icon={mdiArrowDown} size="1rem" />
          </span>
          <Text size="small">to navigate</Text>
        </div>

        <div class="flex place-items-center gap-1">
          <span class="rounded bg-gray-300 p-1 dark:bg-gray-500">
            <Icon icon={mdiKeyboardEsc} size="1rem" />
          </span>
          <Text size="small">to close</Text>
        </div>
      </div>
    </div>
  </ModalFooter>
</Modal>
