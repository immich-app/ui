<script lang="ts">
  import { shortcuts } from '$lib/actions/shortcut.js';
  import { setChildContext } from '$lib/common/context.svelte.js';
  import IconButton from '$lib/components/IconButton/IconButton.svelte';
  import { ChildKey } from '$lib/constants.js';
  import { t } from '$lib/services/translation.svelte.js';
  import type { ControlBarProps } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import { mdiClose } from '@mdi/js';
  import { fly } from 'svelte/transition';
  import { tv } from 'tailwind-variants';

  let {
    ref = $bindable(null),
    closeIcon,
    class: className,
    shape = 'semi-round',
    variant = 'filled',
    closeOnEsc = true,
    static: isStatic = false,
    translations,
    onClose,
    children,
    ...restProps
  }: ControlBarProps = $props();

  const styles = tv({
    base: `h-control-bar flex w-full items-center gap-2 px-2`,
    variants: {
      variant: {
        filled: 'bg-subtle',
        outline: 'dark:border-light-200 shadow-md dark:border',
        ghost: '',
      },
      shape: {
        'semi-round': 'rounded-lg',
        rectangle: 'rounded-none',
      },
    },
  });

  const onEscape = () => {
    if (closeOnEsc) {
      onClose?.();
    }
  };

  const { getByKey } = setChildContext(ChildKey.ControlBar);
  const headerChild = $derived(getByKey(ChildKey.ControlBarHeader));
  const contentChild = $derived(getByKey(ChildKey.ControlBarContent));
  const overflowChild = $derived(getByKey(ChildKey.ControlBarOverflow));
</script>

<svelte:window use:shortcuts={[{ shortcut: { key: 'Escape' }, onShortcut: onEscape }]} />

<nav
  bind:this={ref}
  in:fly={{ y: 10, duration: isStatic ? 0 : 200 }}
  class={cleanClass(styles({ shape, variant }), className)}
  {...restProps}
>
  <div class={cleanClass('flex shrink-0 items-center gap-2')}>
    {#if typeof closeIcon === 'function'}
      {@render closeIcon?.()}
    {:else if onClose}
      <IconButton
        icon={closeIcon ?? mdiClose}
        shape="round"
        variant="ghost"
        color="secondary"
        aria-label={t('close', translations)}
        onclick={() => onClose()}
      />
    {/if}

    {#if headerChild}
      <div class={cleanClass('flex shrink-0 flex-col', headerChild.class)}>
        {@render headerChild.children?.()}
      </div>
    {/if}
  </div>

  <div class={cleanClass('flex grow items-center gap-2', contentChild?.class)}>
    {@render contentChild?.children?.()}
  </div>

  {#if overflowChild}
    <div class={cleanClass('flex shrink-0 items-center gap-2', overflowChild.class)}>
      {@render overflowChild.children?.()}
    </div>
  {/if}

  {@render children?.()}
</nav>
