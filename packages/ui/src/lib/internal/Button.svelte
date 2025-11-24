<script lang="ts">
  import Icon from '$lib/components/Icon/Icon.svelte';
  import LoadingSpinner from '$lib/components/LoadingSpinner/LoadingSpinner.svelte';
  import { styleVariants } from '$lib/styles.js';
  import type { ButtonProps, Size } from '$lib/types.js';
  import { isExternalLink, resolveUrl } from '$lib/utilities/common.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import { Button as ButtonPrimitive } from 'bits-ui';
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';
  import { tv } from 'tailwind-variants';

  type InternalButtonProps = ButtonProps & {
    /** when true, button width to height ratio is 1:1 */
    icon?: boolean;
  };

  let {
    ref = $bindable(null),
    type = 'button',
    href,
    variant = 'filled',
    color = 'primary',
    shape = 'semi-round',
    size = 'medium',
    loading = false,
    fullWidth = false,
    leadingIcon,
    trailingIcon,
    icon = false,
    class: className = '',
    children,
    ...restProps
  }: InternalButtonProps = $props();

  const disabled = $derived((restProps as HTMLButtonAttributes).disabled || loading);

  const buttonVariants = tv({
    base: 'ring-offset-background focus-visible:ring-ring flex items-center justify-center gap-1 rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
    variants: {
      disabled: {
        true: 'disabled:pointer-events-none disabled:opacity-50 aria-disabled:opacity-50',
        false: 'cursor-pointer',
      },
      shape: styleVariants.shape,
      fullWidth: {
        true: 'w-full',
      },
      textPadding: {
        tiny: 'px-3 py-1',
        small: 'px-4 py-2',
        medium: 'px-5 py-2',
        large: 'px-8 py-2.5',
        giant: 'px-10 py-3',
      },
      textSize: styleVariants.textSize,
      iconSize: {
        tiny: 'h-6 w-6',
        small: 'h-8 w-8',
        medium: 'h-10 w-10',
        large: 'h-12 w-12',
        giant: 'h-14 w-14',
      },
      roundedSize: {
        tiny: 'rounded-lg',
        small: 'rounded-lg',
        medium: 'rounded-xl',
        large: 'rounded-xl',
        giant: 'rounded-2xl',
      },
      filledColor: styleVariants.filledColor,
      filledColorHover: styleVariants.filledColorHover,
      outlineColor: {
        primary: 'border-primary bg-primary/10 text-primary hover:bg-primary/20 border',
        secondary: 'border-dark bg-light-100 text-dark hover:bg-light-200 border',
        success: 'border-success bg-success/10 text-success hover:bg-success/20 border',
        danger: 'border-danger bg-danger/10 text-danger hover:bg-danger/20 border',
        warning: 'border-warning bg-warning/10 text-warning hover:bg-warning/20 border',
        info: 'border-info bg-info/10 text-info hover:bg-info/20 border',
      },
      ghostColor: {
        primary: 'text-primary hover:bg-primary-50',
        secondary: 'text-dark hover:bg-light-100',
        success: 'text-success hover:bg-success-50',
        danger: 'text-danger hover:bg-danger-50',
        warning: 'text-warning hover:bg-warning-50',
        info: 'text-info hover:bg-info-50',
      },
    },
  });

  const spinnerSizes: Record<Size, Size> = {
    tiny: 'tiny',
    small: 'tiny',
    medium: 'small',
    large: 'medium',
    giant: 'large',
  };

  const classList = $derived(
    cleanClass(
      twMerge(
        buttonVariants({
          shape,
          fullWidth,
          textPadding: icon ? undefined : size,
          textSize: size,
          iconSize: icon ? size : undefined,
          disabled,
          roundedSize: shape === 'semi-round' ? size : undefined,
          filledColor: variant === 'filled' ? color : undefined,
          filledColorHover: variant === 'filled' ? color : undefined,
          outlineColor: variant === 'outline' ? color : undefined,
          ghostColor: variant === 'ghost' ? color : undefined,
        }),
        className,
      ),
    ),
  );

  const iconSizes = {
    tiny: 'h-4 w-4',
    small: 'h-4 w-4',
    medium: 'h-4 w-4',
    large: 'h-6 w-6',
    giant: 'h-8 w-8',
  };
</script>

{#snippet content()}
  {#if leadingIcon && !loading}
    <div>
      <Icon size="100%" class={iconSizes[size]} icon={leadingIcon} aria-hidden />
    </div>
  {/if}
  {@render children?.()}
  {#if trailingIcon}
    <Icon size="100%" class={iconSizes[size]} icon={trailingIcon} aria-hidden />
  {/if}
{/snippet}

{#snippet wrapper()}
  {#if loading}
    <div class="flex items-center justify-center gap-2">
      <LoadingSpinner {color} size={spinnerSizes[size]} />
      {#if !icon}
        {@render content()}
      {/if}
    </div>
  {:else}
    {@render content()}
  {/if}
{/snippet}

{#if href}
  {@const resolved = resolveUrl(href)}
  {@const external = isExternalLink(resolved)}
  <a
    bind:this={ref}
    href={resolved}
    class={classList}
    aria-disabled={disabled}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    {...restProps as HTMLAnchorAttributes}
  >
    {@render wrapper()}
  </a>
{:else}
  <ButtonPrimitive.Root
    bind:ref
    class={classList}
    type={type as HTMLButtonAttributes['type']}
    {...restProps as HTMLButtonAttributes}
    {disabled}
    aria-disabled={disabled}
  >
    {@render wrapper()}
  </ButtonPrimitive.Root>
{/if}
