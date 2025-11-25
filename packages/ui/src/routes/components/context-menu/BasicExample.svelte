<script lang="ts">
  import type { ActionItem, ActionItemHandler, MenuItems } from '@immich/ui';
  import { ContextMenuButton, MenuItemType, Stack, toastManager } from '@immich/ui';
  import {
    mdiContentCopy,
    mdiContentCut,
    mdiContentPaste,
    mdiDownload,
    mdiPencilOutline,
    mdiShareVariant,
    mdiTrashCanOutline,
  } from '@mdi/js';

  const onAction: ActionItemHandler = (item) => {
    toastManager.show({
      title: `Clicked ${item.title}`,
      color: item.color ?? 'primary',
      icon: item.icon,
    });
  };

  const items: MenuItems = [
    { title: 'Edit album', icon: mdiPencilOutline, onAction },
    { title: 'Share', icon: mdiShareVariant, onAction },
    { title: 'Download', icon: mdiDownload, onAction },
    MenuItemType.Divider,
    { title: 'Delete', icon: mdiTrashCanOutline, color: 'danger', onAction },
  ];

  const bottomItems: ActionItem[] = [
    { title: 'Cut', icon: mdiContentCut, onAction },
    { title: 'Copy', icon: mdiContentCopy, onAction },
    { title: 'Paste', icon: mdiContentPaste, onAction },
    { title: 'Delete', icon: mdiTrashCanOutline, color: 'danger', onAction },
  ];

  const options = ['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const;
</script>

<Stack>
  {#each options as position (position)}
    <ContextMenuButton aria-label="Open menu" {position} {items} {bottomItems} />
  {/each}
</Stack>
