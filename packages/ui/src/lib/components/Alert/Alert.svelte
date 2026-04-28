<script lang="ts">
  import Card from '$lib/components/Card/Card.svelte';
  import CardBody from '$lib/components/Card/CardBody.svelte';
  import CloseButton from '$lib/components/CloseButton/CloseButton.svelte';
  import Icon from '$lib/components/Icon/Icon.svelte';
  import Text from '$lib/components/Text/Text.svelte';
  import { styleVariants } from '$lib/styles.js';
  import type { Color, IconLike, Size } from '$lib/types.js';
  import { cleanClass, resolveIcon } from '$lib/utilities/internal.js';
  import {
    mdiAlertOutline,
    mdiCheckCircleOutline,
    mdiCloseCircleOutline,
    mdiInformationVariantCircleOutline,
  } from '@mdi/js';
  import type { Snippet } from 'svelte';
  import { tv } from 'tailwind-variants';

  type Props = {
    color?: Color;
    size?: Size;
    icon?: IconLike | false;
    shape?: 'round' | 'rectangle';
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
    shape = 'round',
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

  const styles = tv({
    variants: {
      color: {
        primary: 'border-s-primary-500',
        secondary: 'border-s-dark',
        warning: 'border-s-warning-500',
        success: 'border-s-success-500',
        danger: 'border-s-danger-500',
        info: 'border-s-info-500',
      },
      shape: {
        rectangle: 'border-s-4',
        round: '',
      },
    },
  });

  const iconStyles = tv({
    base: '',
    variants: {
      color: styleVariants.color,
    },
  });
</script>

{#if open}
  <Card {color} class={cleanClass(styles({ shape, color }), className)} {shape}>
    <CardBody>
      <div class={cleanClass((closable || onClose) && 'flex items-center justify-between')}>
        <div class={cleanClass('flex gap-2')}>
          {#if icon}
            <div>
              <Icon {icon} size={iconSizes[size]} class={iconStyles({ color })} />
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
