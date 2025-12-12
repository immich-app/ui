<script lang="ts">
  import Card from '$lib/components/Card/Card.svelte';
  import CardBody from '$lib/components/Card/CardBody.svelte';
  import CloseButton from '$lib/components/CloseButton/CloseButton.svelte';
  import Icon from '$lib/components/Icon/Icon.svelte';
  import Text from '$lib/components/Text/Text.svelte';
  import type { Color, Size } from '$lib/types.js';
  import { cleanClass, resolveIcon } from '$lib/utilities/internal.js';
  import {
    mdiAlertOutline,
    mdiCheckCircleOutline,
    mdiCloseCircleOutline,
    mdiInformationVariantCircleOutline,
  } from '@mdi/js';
  import type { Snippet } from 'svelte';

  type Props = {
    color?: Color;
    size?: Size;
    icon?: string | false;
    title?: string;
    class?: string;
    duration?: number;
    closable?: boolean;
    controlled?: boolean;
    onClose?: () => void;
    children?: Snippet;
  };

  const {
    color = 'primary',
    icon: iconOverride,
    size = 'large',
    title,
    class: className,
    duration,
    controlled,
    closable,
    onClose,
    children,
  }: Props = $props();

  let open = $state(true);

  const iconSizes: Record<Size, string> = {
    tiny: '1em',
    small: '1.25em',
    medium: '1.5em',
    large: '1.75em',
    giant: '1.85em',
  };

  const handleClose = () => {
    if (!open) {
      return;
    }

    if (!controlled) {
      open = false;
    }

    onClose?.();
  };

  if (duration) {
    setTimeout(handleClose, duration);
  }

  const icon = $derived(
    resolveIcon({
      icons: {
        success: mdiCheckCircleOutline,
        warning: mdiAlertOutline,
        danger: mdiCloseCircleOutline,
      },
      color,
      override: iconOverride,
      fallback: mdiInformationVariantCircleOutline,
    }),
  );
</script>

{#if open}
  <Card {color} class={cleanClass(className)}>
    <CardBody>
      <div class={cleanClass((closable || onClose) && 'flex items-center justify-between')}>
        <div class={cleanClass('flex gap-2')}>
          {#if icon}
            <div>
              <Icon {icon} size={iconSizes[size]} />
            </div>
          {/if}

          <div class="flex flex-col gap-2 self-center">
            {#if title}
              <Text {size} fontWeight={children ? 'bold' : undefined}>{title}</Text>
            {/if}
            {#if children}
              {@render children()}
            {/if}
          </div>
        </div>
        {#if closable || onClose}
          <div>
            <CloseButton onclick={handleClose} />
          </div>
        {/if}
      </div>
    </CardBody>
  </Card>
{/if}
