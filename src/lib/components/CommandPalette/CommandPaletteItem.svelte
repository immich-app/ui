<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
  import Icon from '$lib/components/Icon/Icon.svelte';
  import IconButton from '$lib/components/IconButton/IconButton.svelte';
  import Text from '$lib/components/Text/Text.svelte';
  import type { CommandItem } from '$lib/services/command-palette-manager.svelte';
  import { mdiClose } from '@mdi/js';

  type Props = {
    item: CommandItem;
    selected: boolean;
    onSelect: () => void;
    onRemove?: () => void;
  };

  const { item, selected, onRemove, onSelect }: Props = $props();

  const handleRemove = (event: MouseEvent) => {
    event.stopPropagation();
    onRemove?.();
  };

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
    class="overflow-hidden border"
  >
    <div class="flex w-full place-items-center justify-between gap-2">
      <div class="flex min-w-0 place-items-center gap-2">
        <Icon icon={item.icon} size="2rem" class={item.iconClass} />
        <div class="flex min-w-0 flex-col">
          <div class="flex place-items-center gap-1">
            <Text fontWeight="bold">{item.title}</Text>
          </div>
          {#if item.description}
            <Text
              size="small"
              class="overflow-hidden text-ellipsis whitespace-nowrap"
              color={selected ? undefined : 'muted'}>{item.description}</Text
            >
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
      {:else}
        <span class="shrink-0">[{item.type}]</span>
      {/if}
    </div>
  </Button>
</div>
