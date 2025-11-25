<script lang="ts">
  import IconButton from '$lib/components/IconButton/IconButton.svelte';
  import { menuManager } from '$lib/services/menu-manager.svelte.js';
  import type { ContextMenuButtonProps } from '$lib/types.js';
  import { mdiDotsVertical } from '@mdi/js';

  const {
    color = 'secondary',
    position = 'top-right',
    icon = mdiDotsVertical,
    variant = 'ghost',
    shape = 'round',
    items,
    bottomItems,
    ...rest
  }: ContextMenuButtonProps = $props();

  const onclick = async (event: Event) => {
    await menuManager.show({ target: event.currentTarget as HTMLElement, position, items, bottomItems });
  };
</script>

<IconButton {icon} {color} {shape} {variant} {...rest} {onclick} />
