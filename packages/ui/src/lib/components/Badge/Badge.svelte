<script lang="ts">
  import IconButton from '$lib/components/IconButton/IconButton.svelte';
  import { t } from '$lib/services/translation.svelte.js';
  import { styleVariants } from '$lib/styles.js';
  import type { Color, Shape, Size, TranslationProps } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import { mdiClose } from '@mdi/js';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  type Props = {
    size?: Size;
    color?: Color;
    shape?: Shape;
    class?: string;
    translations?: TranslationProps<'close'>;
    onClose?: () => void;
    close?: Snippet;
    children?: Snippet;
  } & Omit<HTMLAttributes<HTMLSpanElement>, 'color'>;

  let {
    size = 'medium',
    class: className,
    color = 'primary',
    shape = 'semi-round',
    translations,
    onClose,
    close,
    children,
    ...props
  }: Props = $props();

  const styles = tv({
    base: 'inline-flex items-center gap-1 font-medium antialiased',
    variants: {
      shape: styleVariants.shape,
      color: {
        primary: 'bg-primary-100 text-primary-800',
        secondary: 'bg-light-100 text-light-800',
        success: 'bg-success-100 text-success-700',
        info: 'bg-info-100 text-info-800',
        warning: 'bg-warning-100 text-warning-800',
        danger: 'bg-danger-100 text-danger-800',
      },
      textSize: styleVariants.textSize,
      paddingSize: {
        tiny: 'px-2 py-0.5',
        small: 'px-2.5 py-0.75',
        medium: 'px-2.5 py-1',
        large: 'px-3 py-1.25',
        giant: 'px-3.5 py-1.5',
      },
      roundedSize: {
        tiny: 'rounded-md',
        small: 'rounded-lg',
        medium: 'rounded-lg',
        large: 'rounded-xl',
        giant: 'rounded-xl',
      },
    },
  });
</script>

<span
  {...props}
  class={cleanClass(
    styles({
      color,
      textSize: size,
      paddingSize: size,
      shape,
      roundedSize: shape === 'semi-round' ? size : undefined,
    }),
    className,
  )}
>
  {@render children?.()}
  {#if onClose}
    <IconButton
      icon={mdiClose}
      {color}
      variant="ghost"
      size="tiny"
      aria-label={t('close', translations)}
      onclick={onClose}
    />
  {/if}
  {#if close}
    {@render close()}
  {/if}
</span>
