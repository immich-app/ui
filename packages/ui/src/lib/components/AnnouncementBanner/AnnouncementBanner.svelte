<script lang="ts">
  import Icon from '$lib/components/Icon/Icon.svelte';
  import Text from '$lib/components/Text/Text.svelte';
  import { styleVariants } from '$lib/styles.js';
  import type { IconLike, Size, TextColor } from '$lib/types.js';
  import { cleanClass, resolveIcon } from '$lib/utilities/internal.js';
  import { mdiAlertCircleOutline, mdiAlertOutline, mdiCheckAll, mdiInformationOutline, mdiPartyPopper } from '@mdi/js';
  import { DateTime } from 'luxon';
  import { onDestroy, onMount, type Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  type Props = {
    color?: TextColor;
    size?: Size;
    icon?: IconLike | false;
    since?: DateTime;
    until?: DateTime;
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
        primary: 'bg-primary-100 text-primary dark:bg-primary-900',
        secondary: 'text-dark dark:bg-dark/25 bg-gray-200',
        muted: 'bg-subtle text-subtle dark:bg-subtle',
        info: 'bg-info-100 text-info dark:bg-info-900',
        warning: 'bg-warning-100 text-warning dark:bg-warning-900',
        danger: 'bg-danger-100 text-danger dark:bg-danger-900',
        success: 'bg-success-100 text-success dark:bg-success-900',
      },
    },
  });

  let {
    color = 'primary',
    size = 'medium',
    class: className,
    center = false,
    icon: iconOverride,
    since,
    until,
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

  let now = $state(DateTime.now());
  let isStarted = $derived(since ? now >= since : true);
  let isFinished = $derived(until ? now <= until : true);
  let isVisible = $derived(isStarted && isFinished);
  let timer: ReturnType<typeof setInterval>;

  onMount(() => {
    timer = setInterval(() => (now = DateTime.now()), 1000);
  });

  onDestroy(() => {
    if (timer) {
      clearInterval(timer);
    }
  });
</script>

{#if isVisible}
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
{/if}
