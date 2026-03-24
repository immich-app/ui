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
    base: 'text-light inline-flex items-center gap-1 font-medium antialiased',
    variants: {
      shape: styleVariants.shape,
      color: {
        primary: 'bg-primary',
        secondary: 'bg-dark',
        success: 'bg-success',
        info: 'bg-info',
        warning: 'bg-warning',
        danger: 'bg-danger text-danger-50',
      },
      textSize: styleVariants.textSize,
      paddingSize: {
        tiny: 'px-1.5 py-1',
        small: 'px-1.75 py-0.75',
        medium: 'px-2.5 py-1',
        large: 'px-2.75 py-1',
        giant: 'px-3 py-1.25',
      },
      roundedSize: {
        tiny: 'rounded-lg',
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
    <IconButton icon={mdiClose} {color} size="tiny" aria-label={t('close', translations)} onclick={onClose} />
  {/if}
  {#if close}
    {@render close()}
  {/if}
</span>
