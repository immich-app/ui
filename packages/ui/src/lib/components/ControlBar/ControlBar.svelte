<script lang="ts">
  import { shortcuts } from '$lib/actions/shortcut.js';
  import { withChildrenSnippets } from '$lib/common/use-child.svelte.js';
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
    variant = 'ghost',
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
        filled: 'dark:bg-subtle bg-white shadow-lg',
        outline: 'dark:border-light-200 border-light-200 border shadow-md',
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

  const { getChildren: getChildSnippet } = withChildrenSnippets(ChildKey.ControlBar);
  const headerChild = $derived(getChildSnippet(ChildKey.ControlBarHeader));
  const contentChild = $derived(getChildSnippet(ChildKey.ControlBarContent));
  const overflowChild = $derived(getChildSnippet(ChildKey.ControlBarOverflow));
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

    <div class={cleanClass('flex shrink-0 flex-col')}>
      {@render headerChild?.snippet()}
    </div>
  </div>

  <div class={cleanClass('flex grow items-center gap-2', contentChild?.class)}>
    {@render contentChild?.snippet()}
  </div>

  {#if overflowChild}
    <div class={cleanClass('flex shrink-0 items-center gap-2', overflowChild.class)}>
      {@render overflowChild.snippet()}
    </div>
  {/if}

  {@render children?.()}
</nav>
