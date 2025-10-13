<script lang="ts">
  import Icon from '$lib/components/Icon/Icon.svelte';
  import Text from '$lib/components/Text/Text.svelte';
  import { styleVariants } from '$lib/styles.js';
  import type { IconLike, Size, TextColor } from '$lib/types.js';
  import { cleanClass, resolveIcon } from '$lib/utilities/internal.js';
  import { mdiAlertCircleOutline, mdiAlertOutline, mdiCheckAll, mdiInformationOutline, mdiPartyPopper } from '@mdi/js';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  type Props = {
    color?: TextColor;
    size?: Size;
    icon?: IconLike | false;
    center?: boolean;
    children?: Snippet;
    content?: Snippet;
  } & HTMLAttributes<HTMLElement>;

  const styles = tv({
    base: 'px-4 py-2',
    variants: {
      center: {
        true: 'flex items-center justify-around',
        false: '',
      },
      color: {
        primary: 'bg-primary/15 text-primary dark:bg-primary/10',
        secondary: 'bg-dark/15 text-dark dark:bg-dark/10',
        muted: 'bg-subtle text-subtle dark:bg-subtle',
        info: 'bg-info/15 text-info dark:bg-info/10',
        warning: 'bg-warning/15 text-warning dark:bg-warning/10',
        danger: 'bg-danger/15 text-danger dark:bg-danger/10',
        success: 'bg-success/15 text-success dark:bg-success/10',
      },
    },
  });

  let {
    color = 'primary',
    size = 'medium',
    class: className,
    center = false,
    icon: iconOverride,
    content,
    children,
    ...restProps
  }: Props = $props();

  const icon = $derived(
    resolveIcon({
      icons: {
        danger: mdiAlertCircleOutline,
        warning: mdiAlertOutline,
        success: mdiCheckAll,
        info: mdiInformationOutline,
      },
      color,
      override: iconOverride,
      fallback: mdiPartyPopper,
    }),
  );

  const iconStyles = tv({
    base: '',
    variants: {
      color: styleVariants.textColor,
      size: {
        tiny: 'text-xs',
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
        giant: 'text-xl',
      },
    },
  });
</script>

<div class={cleanClass(styles({ color, center }), className)} {...restProps}>
  {#if content}
    {@render content()}
  {:else}
    <div class="flex items-center gap-2">
      {#if icon}
        <Icon {icon} class={iconStyles({ color, size })} />
      {/if}
      <Text color="secondary" {size}>
        {@render children?.()}
      </Text>
    </div>
  {/if}
</div>
