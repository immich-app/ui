<script lang="ts">
  import type { ContextMenuBaseProps, MenuSelectHandler } from '@immich/ui';
  import { IconButton, MenuItemType, menuManager, Stack, Text, toastManager } from '@immich/ui';
  import {
    mdiContentCopy,
    mdiContentCut,
    mdiContentPaste,
    mdiDotsVertical,
    mdiDownload,
    mdiPencilOutline,
    mdiShareVariant,
    mdiTrashCanOutline,
  } from '@mdi/js';

  const onSelect: MenuSelectHandler = ({ item }) => {
    toastManager.show({
      title: `Clicked ${item.title}`,
      color: item.color ?? 'primary',
      icon: item.icon,
    });
  };

  const handleOpen = async (event: Event, props: Partial<ContextMenuBaseProps>) => {
    await menuManager.show({
      ...props,
      target: event.currentTarget as HTMLElement,
      items: [
        { title: 'Edit album', icon: mdiPencilOutline, onSelect },
        { title: 'Share', icon: mdiShareVariant, onSelect },
        { title: 'Download', icon: mdiDownload, onSelect },
        MenuItemType.Divider,
        { title: 'Delete', icon: mdiTrashCanOutline, color: 'danger', onSelect },
      ],
      bottomItems: [
        { title: 'Cut', icon: mdiContentCut, onSelect },
        { title: 'Copy', icon: mdiContentCopy, onSelect },
        { title: 'Paste', icon: mdiContentPaste, onSelect },
        { title: 'Delete', icon: mdiTrashCanOutline, color: 'danger', onSelect },
      ],
    });
  };

  const options = ['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const;
</script>

<Stack>
  {#each options as position (position)}
    <div>
      <Text fontWeight="bold">{position}</Text>
      <IconButton
        shape="round"
        variant="ghost"
        color="secondary"
        icon={mdiDotsVertical}
        onclick={(event: Event) => handleOpen(event, { position })}
        aria-label="Open menu"
      />
    </div>
  {/each}
</Stack>
