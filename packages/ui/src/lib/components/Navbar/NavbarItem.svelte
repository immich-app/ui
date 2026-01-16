<script lang="ts">
  import { page } from '$app/state';
  import Icon from '$lib/components/Icon/Icon.svelte';
  import Link from '$lib/components/Link/Link.svelte';
  import NavbarItem from '$lib/components/Navbar/NavbarItem.svelte';
  import { t } from '$lib/services/translation.svelte.js';
  import type { NavbarProps } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import { mdiChevronDown, mdiChevronRight } from '@mdi/js';
  import { tv } from 'tailwind-variants';

  const startsWithHref = () => page.url.pathname.startsWith(href);

  let {
    href,
    isActive: isActiveOverride,
    title,
    variant,
    active: activeOverride,
    icon,
    activeIcon,
    expanded = $bindable(false),
    items,
    class: className,
  }: NavbarProps = $props();

  const isActive = $derived(isActiveOverride ?? startsWithHref);
  let active = $derived(activeOverride ?? isActive());
  const iconProps = $derived(typeof icon === 'string' ? { icon } : icon);
  const activeIconProps = $derived(typeof activeIcon === 'string' ? { icon: activeIcon } : activeIcon);

  const styles = tv({
    base: 'hover:bg-subtle hover:text-primary flex w-full place-items-center gap-4 rounded-e-full ps-5 transition-[padding] delay-100 duration-100',
    variants: {
      active: {
        true: 'bg-primary/10 text-primary',
        false: '',
      },
      variant: {
        default: 'py-3',
        compact: 'py-2',
      },
    },
  });
</script>

<div>
  <div class="relative flex items-center">
    {#if items}
      <button
        type="button"
        aria-label={expanded ? t('collapse') : t('expand')}
        class="hover:bg-subtle hover:text-primary absolute me-2 hidden h-full rounded-lg px-0.5 md:block"
        onclick={() => (expanded = !expanded)}
      >
        <Icon
          icon={expanded ? mdiChevronDown : mdiChevronRight}
          size="1em"
          class="shrink-0 delay-100 duration-100 "
          aria-hidden
        />
      </button>
    {/if}
    <Link
      {href}
      aria-current={active ? 'page' : undefined}
      underline={false}
      class={cleanClass(styles({ active, variant: variant ?? 'default' }), className)}
    >
      <div class="relative flex w-full place-items-center {variant === 'compact' ? 'gap-2' : 'gap-4'}">
        {#if iconProps}
          <Icon
            size="1.375em"
            class="shrink-0"
            aria-hidden={true}
            {...active && activeIconProps ? activeIconProps : iconProps}
          />
        {/if}
        <span class="truncate text-sm font-medium">{title}</span>
      </div>
    </Link>
  </div>

  {#if expanded}
    <div>
      {#if Array.isArray(items)}
        {#each items as { class: className, ...item }, i (i)}
          <NavbarItem {variant} {...item} class={cleanClass('ps-8', className)} />
        {/each}
      {:else if items}
        {@render items()}
      {/if}
    </div>
  {/if}
</div>
