<script lang="ts">
  import { page } from '$app/state';
  import Icon from '$lib/components/Icon/Icon.svelte';
  import Link from '$lib/components/Link/Link.svelte';
  import type { IconProps } from '$lib/types.js';
  import { tv } from 'tailwind-variants';

  type Props = {
    title: string;
    href: string;
    external?: boolean;
    active?: boolean;
    variant?: 'compact';
    isActive?: () => boolean;
    icon?: string | IconProps;
    activeIcon?: string | IconProps;
  };

  const startsWithHref = () => page.url.pathname.startsWith(href);

  let {
    href,
    external,
    isActive: isActiveOverride,
    title,
    variant,
    active: activeOverride,
    icon,
    activeIcon,
  }: Props = $props();

  const isActive = isActiveOverride ?? startsWithHref;
  let active = $derived(activeOverride ?? isActive());

  const iconProps = $derived(typeof icon === 'string' ? { icon } : icon);
  const activeIconProps = $derived(typeof activeIcon === 'string' ? { icon: activeIcon } : activeIcon);

  const styles = tv({
    base: 'hover:bg-subtle hover:text-primary flex w-full place-items-center gap-4 rounded-e-full px-5 transition-[padding] delay-100 duration-100 group-hover:sm:px-5',
    variants: {
      active: {
        true: 'bg-primary/10 text-primary',
        false: '',
      },
      variant: {
        default: 'py-3 ps-5',
        compact: 'py-2 ps-3',
      },
    },
  });
</script>

<Link
  {href}
  {external}
  aria-current={active ? 'page' : undefined}
  underline={false}
  class={styles({ active, variant: variant ?? 'default' })}
>
  <div class="flex w-full place-items-center gap-4 truncate overflow-hidden">
    {#if iconProps}
      <Icon
        size="1.375em"
        class="shrink-0"
        aria-hidden={true}
        {...active && activeIconProps ? activeIconProps : iconProps}
      />
    {/if}
    <span class="text-sm font-medium">{title}</span>
  </div>
</Link>
