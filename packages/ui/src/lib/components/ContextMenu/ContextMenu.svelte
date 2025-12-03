<script lang="ts">
  import Icon from '$lib/components/Icon/Icon.svelte';
  import Text from '$lib/components/Text/Text.svelte';
  import { zIndex } from '$lib/constants.js';
  import { styleVariants } from '$lib/styles.js';
  import { type ActionItem, type ContextMenuProps, type MenuItems } from '$lib/types.js';
  import { isMenuItemType } from '$lib/utilities/common.js';
  import { cleanClass, isEnabled } from '$lib/utilities/internal.js';
  import { DropdownMenu } from 'bits-ui';
  import { fly } from 'svelte/transition';
  import { tv } from 'tailwind-variants';

  let {
    onClose,
    items,
    bottomItems,
    size = 'medium',
    target,
    position = 'top-left',
    class: className,
    ...restProps
  }: ContextMenuProps = $props();

  const itemStyles = tv({
    base: 'hover:bg-light-200 flex w-full items-center gap-1 rounded-lg p-1 text-start hover:cursor-pointer',
    variants: {
      color: styleVariants.textColor,
    },
  });

  const wrapperStyles = tv({
    base: 'bg-light-100 dark:border-light-300 flex flex-col gap-1 overflow-hidden rounded-xl border py-1 shadow-sm',
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

  const getFilteredItems = (items?: MenuItems) => {
    if (!items) {
      return [];
    }

    const results = [];
    for (const item of items) {
      if (item && (isMenuItemType(item) || isEnabled(item))) {
        results.push(item);
        continue;
      }
    }

    // remove trailing dividers
    for (let i = results.length - 1; i >= 0; i--) {
      const item = results[i];
      if (isMenuItemType(item)) {
        results.pop();
        continue;
      }

      break;
    }

    return results;
  };

  const filteredItems = $derived(getFilteredItems(items));
  const filteredBottomItems = $derived(getFilteredItems(bottomItems) as ActionItem[]);

  const alignOffset = $derived(target.clientWidth / 2);
  const sideOffset = $derived(-target.clientHeight / 2);
  const { side, align } = $derived(getAlignment(position));
</script>

<DropdownMenu.Root open={true} onOpenChange={() => onClose()}>
  <DropdownMenu.Portal>
    <DropdownMenu.Content forceMount customAnchor={target} {side} {align} {alignOffset} {sideOffset}>
      {#snippet child({ wrapperProps, props, open })}
        {#if open}
          <div {...wrapperProps} class={zIndex.ContextMenu}>
            <div {...props} {...restProps} class={cleanClass(wrapperStyles({ size }), className)} transition:fly>
              {#each filteredItems as item, i (isMenuItemType(item) ? i : item.title)}
                {#if isMenuItemType(item)}
                  <DropdownMenu.Separator class="dark:border-light-300 my-0.5 border-t" />
                {:else}
                  <DropdownMenu.Item
                    textValue={item.title}
                    closeOnSelect
                    onSelect={() => item.onAction(item)}
                    class="px-1"
                  >
                    <div class={itemStyles({ color: item.color })}>
                      <Icon icon={item.icon} class="m-2 shrink-0" />
                      <Text class="grow text-start font-medium select-none" size="medium">{item.title}</Text>
                    </div>
                  </DropdownMenu.Item>
                {/if}
              {/each}

              {#if filteredBottomItems.length > 0}
                <DropdownMenu.Separator class="dark:border-light-300 my-0.5 border-t" />
                <div class="flex gap-1 px-1">
                  {#each filteredBottomItems as item (item.title)}
                    <DropdownMenu.Item
                      textValue={item.title}
                      closeOnSelect
                      onSelect={() => item.onAction(item)}
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
