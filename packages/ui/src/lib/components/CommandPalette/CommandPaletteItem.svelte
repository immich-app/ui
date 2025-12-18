<script lang="ts">
  import { renderShortcut } from '$lib/actions/shortcut.js';
  import Badge from '$lib/components/Badge/Badge.svelte';
  import Button from '$lib/components/Button/Button.svelte';
  import Icon from '$lib/components/Icon/Icon.svelte';
  import Kbd from '$lib/components/Kbd/Kbd.svelte';
  import Text from '$lib/components/Text/Text.svelte';
  import type { ActionItem } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';

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

<div bind:this={ref} class="p-1">
  <Button
    onclick={() => onSelect()}
    fullWidth
    variant={selected ? 'outline' : 'ghost'}
    color="secondary"
    class="hover:bg-primary-50 flex justify-between gap-3 border py-4 text-start {selected
      ? 'border-primary/50 bg-primary-50'
      : 'border-light-200 dark:border-light-300'}"
  >
    <div class="flex flex-col">
      <div class="flex place-items-center gap-2">
        <Text fontWeight="semi-bold">{item.title}</Text>
        <Icon icon={item.icon} size="1.25rem" class={item.iconClass} />
      </div>
      {#if item.description}
        <Text
          size="small"
          class="mt-0.5 line-clamp-4 w-full overflow-hidden text-ellipsis md:line-clamp-2"
          color="muted">{item.description}</Text
        >
      {/if}
      <div class="mt-2">
        <Badge color="primary" size="small" shape="round">{item.type}</Badge>
        {#if item.isGlobal}
          <Badge color="warning" size="small" shape="round">Global</Badge>
        {/if}
      </div>
    </div>
    {#if renderedShortcuts.length > 0}
      <div class="flex shrink-0 flex-col justify-end gap-1">
        {#each renderedShortcuts as shortcut (shortcut.join('-'))}
          <div class="flex justify-end">
            <Kbd size="tiny" class={cleanClass(selected && 'border')}>{shortcut.join(' ')}</Kbd>
          </div>
        {/each}
      </div>
    {/if}
  </Button>
</div>
