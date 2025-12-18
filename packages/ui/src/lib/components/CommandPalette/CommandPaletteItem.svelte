<script lang="ts">
  import { renderShortcut } from '$lib/actions/shortcut.js';
  import Button from '$lib/components/Button/Button.svelte';
  import Icon from '$lib/components/Icon/Icon.svelte';
  import Kbd from '$lib/components/Kbd/Kbd.svelte';
  import Text from '$lib/components/Text/Text.svelte';
  import type { ActionItem } from '$lib/types.js';

  type Props = {
    item: ActionItem;
    selected: boolean;
    onSelect: () => void;
  };

  const { item, selected, onSelect }: Props = $props();

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

<div bind:this={ref}>
  <Button
    onclick={() => onSelect()}
    fullWidth
    variant="ghost"
    color="secondary"
    shape="semi-round"
    class="hover:bg-primary-50 flex justify-between gap-3 border! text-start  {selected
      ? 'border-primary-200 bg-primary-50 '
      : 'border-dark-700 bg-dark-900'}"
  >
    <div class="flex flex-col">
      <div class="flex place-items-center gap-2">
        <Text>{item.title}</Text>
        <Icon icon={item.icon} size="1.25rem" class={item.iconClass} />
      </div>
      {#if item.description}
        <Text
          size="small"
          class="mt-0.5 line-clamp-4 w-full overflow-hidden text-ellipsis md:line-clamp-2"
          color="muted">{item.description}</Text
        >
      {/if}
    </div>
    {#if renderedShortcuts.length > 0}
      <div class="flex shrink-0 flex-col justify-end gap-1">
        {#each renderedShortcuts as shortcut (shortcut.join('-'))}
          <div class="flex justify-end">
            <Kbd size="tiny">{shortcut.join(' ')}</Kbd>
          </div>
        {/each}
      </div>
    {/if}
  </Button>
</div>
