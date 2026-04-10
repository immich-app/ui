<script lang="ts">
  import { renderShortcut } from '$lib/actions/shortcut.js';
  import Badge from '$lib/components/Badge/Badge.svelte';
  import Button from '$lib/components/Button/Button.svelte';
  import Icon from '$lib/components/Icon/Icon.svelte';
  import Kbd from '$lib/components/Kbd/Kbd.svelte';
  import Text from '$lib/components/Text/Text.svelte';
  import type { ActionItem, ActionItemTag } from '$lib/types.js';

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

  const normalizeTags = (tags: Array<string | ActionItemTag>) =>
    tags.map((tag) => (typeof tag === 'string' ? { value: tag } : tag)) as ActionItemTag[];
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
        {#if item.icon}
          <Icon icon={item.icon} size="1.25rem" class={item.iconClass} />
        {/if}
      </div>
      {#if item.description}
        <Text
          size="small"
          class="mt-0.5 line-clamp-4 w-full overflow-hidden text-ellipsis md:line-clamp-2"
          color="muted">{item.description}</Text
        >
      {/if}
      {#if item.tags && item.tags.length > 0}
        <div class="mt-2">
          {#each normalizeTags(item.tags) as tag (tag.value)}
            <Badge color={tag.color ?? 'primary'} size="small" shape={tag.shape ?? 'round'} class={tag.class}
              >{tag.value}</Badge
            >
          {/each}
        </div>
      {/if}
    </div>
    {#if renderedShortcuts.length > 0}
      <div class="flex shrink-0 flex-col justify-end gap-1">
        {#each renderedShortcuts as shortcut, i (i)}
          <div class="flex justify-end">
            <Kbd size="tiny" class="flex gap-1">
              {#each shortcut as item, j (j)}
                <span>
                  {#if 'key' in item}
                    {item.key}
                  {:else}
                    <Icon icon={item.icon} />
                  {/if}
                </span>
              {/each}
            </Kbd>
          </div>
        {/each}
      </div>
    {/if}
  </Button>
</div>
