<script lang="ts">
  import Icon from '$lib/components/Icon/Icon.svelte';
  import Text from '$lib/components/Text/Text.svelte';
  import { zIndex } from '$lib/constants.js';
  import { styleVariants } from '$lib/styles.js';
  import { MenuItemType, type ContextMenuProps, type MenuItem } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import { DropdownMenu } from 'bits-ui';
  import { fly } from 'svelte/transition';
  import { tv } from 'tailwind-variants';

  let {
    onClose,
    items,
    bottomItems,
    size = 'medium',
    anchor,
    position = 'top-left',
    class: className,
    ...restProps
  }: ContextMenuProps = $props();

  const isDivider = (item: MenuItem | MenuItemType): item is MenuItemType => {
    return item === MenuItemType.Divider;
  };

  const itemStyles = tv({
    base: 'hover:bg-subtle flex w-full items-center gap-1 rounded-md px-1 py-0.5 text-start',
    variants: {
      color: styleVariants.textColor,
    },
  });

  const wrapperStyles = tv({
    base: 'bg-light flex flex-col gap-1 overflow-hidden rounded-lg border py-1',
    variants: {
      size: {
        tiny: 'w-32',
        small: 'w-48',
        medium: 'w-3xs',
        large: 'w-sm',
        giant: 'w-lg',
        full: 'w-full',
      },
    },
  });

  const getAlignment = (
    align: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right',
  ): { align: 'start' | 'center' | 'end'; side: 'top' | 'right' | 'bottom' | 'left' } => {
    switch (align) {
      case 'top-left': {
        return {
          align: 'start',
          side: 'bottom',
        };
      }
      case 'top-right': {
        return {
          align: 'end',
          side: 'bottom',
        };
      }
      case 'bottom-left': {
        return {
          align: 'start',
          side: 'top',
        };
      }
      case 'bottom-right': {
        return {
          align: 'end',
          side: 'top',
        };
      }

      default: {
        return {
          align: 'start',
          side: 'bottom',
        };
      }
    }
  };

  const alignOffset = $derived(anchor.clientWidth / 2);
  const sideOffset = $derived(-anchor.clientHeight / 2);
  const { side, align } = $derived(getAlignment(position));
</script>

<DropdownMenu.Root open={true} onOpenChange={() => onClose()}>
  <DropdownMenu.Portal>
    <DropdownMenu.Content forceMount customAnchor={anchor} {side} {align} {alignOffset} {sideOffset}>
      {#snippet child({ wrapperProps, props, open })}
        {#if open}
          <div {...wrapperProps} class={zIndex.ContextMenu}>
            <div {...props} {...restProps} class={cleanClass(wrapperStyles({ size }), className)} transition:fly>
              {#each items as item, i (isDivider(item) ? i : item.title)}
                {#if isDivider(item)}
                  <DropdownMenu.Separator class="my-0.5 border-t" />
                {:else}
                  <DropdownMenu.Item
                    textValue={item.title}
                    closeOnSelect
                    onSelect={(event) => item.onSelect?.({ event, item })}
                    class="px-1"
                  >
                    <div class={itemStyles({ color: item.color })}>
                      <Icon icon={item.icon} class="m-2 shrink-0" />
                      <Text class="grow text-start">{item.title}</Text>
                    </div>
                  </DropdownMenu.Item>
                {/if}
              {/each}

              {#if bottomItems}
                <DropdownMenu.Separator class="my-0.5 border-t" />
                <div class="flex gap-1 px-1">
                  {#each bottomItems as item (item.title)}
                    <DropdownMenu.Item
                      textValue={item.title}
                      closeOnSelect
                      onSelect={(event) => item.onSelect?.({ event, item })}
                      title={item.title}
                    >
                      <div class={cleanClass(itemStyles({ color: item.color }))}>
                        <Icon icon={item.icon} class="m-2 shrink-0" />
                      </div>
                    </DropdownMenu.Item>
                  {/each}
                </div>
              {/if}
            </div>
          </div>
        {/if}
      {/snippet}
    </DropdownMenu.Content>
  </DropdownMenu.Portal>
</DropdownMenu.Root>
