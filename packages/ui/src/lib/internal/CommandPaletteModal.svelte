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
  import Text from '$lib/components/Text/Text.svelte';
  import {
    commandPaletteManager,
    type CommandPaletteTranslations,
  } from '$lib/services/command-palette-manager.svelte.js';
  import { t } from '$lib/services/translation.svelte.js';
  import type { ActionGroup, ActionItem, ActionProvider } from '$lib/types.js';
  import { mdiArrowDown, mdiArrowUp, mdiKeyboardEsc, mdiKeyboardReturn, mdiMagnify } from '@mdi/js';
  import { debounce } from 'lodash-es';

  type Props = {
    onClose: (action?: ActionItem) => void;
    query?: string;
    providers: ActionProvider[];
    translations?: CommandPaletteTranslations;
  };

  const { onClose, query: initialQuery = '', providers, translations }: Props = $props();

  let groups = $state<ActionGroup[]>([]);
  let items = $state<ActionItem[]>([]);
  let query = $derived(initialQuery);
  let selectedIndex = $state(0);

  const search = async ({ force }: { force?: boolean } = {}) => {
    selectedIndex = 0;

    const newItems: ActionItem[] = [];
    const newGroups: ActionGroup[] = [];

    if (query || force) {
      for (const provider of providers) {
        const items = await provider.onSearch(query);
        if (items.length > 0) {
          newGroups.push({ name: provider.name, items });
          newItems.push(...items);
        }
      }
    }

    groups = newGroups;
    items = newItems;
  };

  const onChange = debounce(() => search(), 200, { maxWait: 100, leading: true });

  const handleUp = (event: KeyboardEvent) => handleNavigate(event, 'up');
  const handleDown = (event: KeyboardEvent) => handleNavigate(event, 'down');
  const handleSelect = (event: KeyboardEvent) => handleNavigate(event, 'select');
  const handleNavigate = async (event: KeyboardEvent, direction: 'up' | 'down' | 'select') => {
    event.preventDefault();

    switch (direction) {
      case 'up': {
        if (items.length === 0) {
          break;
        }

        selectedIndex = (selectedIndex - 1 + items.length) % items.length;
        break;
      }

      case 'down': {
        if (items.length === 0) {
          // show all
          if (!query) {
            search({ force: true });
          }
          break;
        }

        selectedIndex = (selectedIndex + 1) % items.length;
        break;
      }

      case 'select': {
        onClose(items[selectedIndex]);
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

<Modal size="large" {onClose} closeOnBackdropClick class="max-h-[75vh]">
  <ModalHeader class="px-4!">
    <div class="flex place-items-center gap-1">
      <Input
        bind:value={query}
        placeholder={t('search_placeholder', translations)}
        leadingIcon={mdiMagnify}
        tabindex={1}
        oninput={onChange}
      />
      <div>
        <CloseButton onclick={() => commandPaletteManager.close()} class="md:hidden" />
      </div>
    </div>
  </ModalHeader>
  <ModalBody class="px-4!">
    {#if groups.length === 0}
      {#if query}
        <Text>{t('search_no_results', translations)}</Text>
      {:else}
        <Text>{t('command_palette_prompt_default', translations)}</Text>
      {/if}
    {/if}

    <div class="flex flex-col gap-2">
      {#each groups as group (group.name)}
        <div>
          <Heading size="tiny" tag="h6" fontWeight="bold" class="mb-1">{group.name}</Heading>
          <div class="flex flex-col gap-1">
            {#each group.items as item, i (i)}
              <CommandPaletteItem
                {item}
                selected={item.onAction === items[selectedIndex]?.onAction}
                onSelect={() => onClose(items[selectedIndex])}
              />
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </ModalBody>
  <ModalFooter>
    <div class="flex w-full justify-around">
      {#if query}
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
      {:else}
        <div class="flex place-items-center gap-1">
          <span class="flex gap-1 rounded bg-gray-300 p-1 dark:bg-gray-500">
            <Icon icon={mdiArrowDown} size="1rem" />
          </span>
          <Text size="small">{t('command_palette_to_show_all', translations)}</Text>
        </div>
      {/if}
    </div>
  </ModalFooter>
</Modal>
