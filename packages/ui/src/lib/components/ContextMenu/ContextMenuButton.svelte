<script lang="ts">
  import IconButton from '$lib/components/IconButton/IconButton.svelte';
  import { menuManager } from '$lib/services/menu-manager.svelte.js';
  import { t } from '$lib/services/translation.svelte.js';
  import type { ContextMenuButtonProps } from '$lib/types.js';
  import { mdiDotsVertical } from '@mdi/js';

  const {
    color = 'secondary',
    position = 'top-right',
    icon = mdiDotsVertical,
    variant = 'ghost',
    shape = 'round',
    'aria-label': ariaLabel,
    items,
    bottomItems,
    translations,
    ...rest
  }: ContextMenuButtonProps = $props();

  const onclick = async (event: Event) => {
    await menuManager.show({ target: event.currentTarget as HTMLElement, position, items, bottomItems });
  };
</script>

{#if items.length > 0}
  <IconButton
    {icon}
    {color}
    {shape}
    {variant}
    aria-label={ariaLabel ?? t('open_menu', translations)}
    {...rest}
    {onclick}
  />
{/if}
