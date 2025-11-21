<script lang="ts">
  import { renderShortcut } from '$lib/actions/shortcut.js';
  import Button from '$lib/components/Button/Button.svelte';
  import Icon from '$lib/components/Icon/Icon.svelte';
  import IconButton from '$lib/components/IconButton/IconButton.svelte';
  import Kbd from '$lib/components/Kbd/Kbd.svelte';
  import Text from '$lib/components/Text/Text.svelte';
  import type { CommandItemResponse } from '$lib/services/command-palette-manager.svelte.js';
  import { mdiClose } from '@mdi/js';
  import Badge from '$lib/components/Badge/Badge.svelte';

  type Props = {
    item: CommandItemResponse;
    selected: boolean;
    onSelect: () => void;
    onRemove?: () => void;
  };

  const { item, selected, onRemove, onSelect }: Props = $props();

  const handleRemove = (event: MouseEvent) => {
    event.stopPropagation();
    onRemove?.();
  };

  const shortcuts =
    item.shortcuts === undefined ? [] : Array.isArray(item.shortcuts) ? item.shortcuts : [item.shortcuts];
  const renderedShortcuts = shortcuts.map((shortcut) => renderShortcut(shortcut));

  let ref = $state<HTMLElement | null>(null);

  $effect(() => {
    if (selected && ref) {
      ref.scrollIntoView({ block: 'nearest', inline: 'start', behavior: 'smooth' });
    }
  });
</script>

<div bind:this={ref} class="p-1">
  <Button
    onclick={() => onSelect()}
    fullWidth
    variant={selected ? 'outline' : 'ghost'}
    color="secondary"
    class="flex justify-between gap-2 overflow-hidden border {selected ? 'border-neutral-500!' : ''}"
  >
    <div class="flex flex-col items-start">
      <div class="flex items-center gap-1">
        <Text fontWeight="bold">{item.title}</Text>
        <Icon icon={item.icon} size="1.25rem" class={item.iconClass} />
      </div>
      {#if item.description}
        <Text
          size="small"
          class="mt-0.5 overflow-hidden text-ellipsis whitespace-nowrap"
          color={selected ? undefined : 'muted'}>{item.description}</Text
        >
      {/if}
      <div class="mt-2">
        <Badge size="small" color="primary" shape="rectangle">{item.type}</Badge>
        {#if item.isGlobal}
          <Badge size="small" shape="rectangle" color="warning">Global</Badge>
        {/if}
      </div>
    </div>
    {#if onRemove}
      <IconButton
        size="small"
        onclick={handleRemove}
        icon={mdiClose}
        shape="round"
        variant="ghost"
        color="secondary"
        aria-label="Remove"
      />
    {:else if renderedShortcuts.length > 0}
      <div>
        <div class="flex flex-col justify-end gap-1">
          {#each renderedShortcuts as shortcut (shortcut.join('-'))}
            <div class="flex justify-end">
              <Kbd size="tiny" class={selected ? '' : 'border-neutral-200 dark:border-neutral-700'}
                >{shortcut.join(' ')}</Kbd
              >
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </Button>
</div>
