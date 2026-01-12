<script lang="ts">
  import { getFieldContext } from '$lib/common/context.svelte.js';
  import Icon from '$lib/components/Icon/Icon.svelte';
  import Label from '$lib/components/Label/Label.svelte';
  import Text from '$lib/components/Text/Text.svelte';
  import { styleVariants } from '$lib/styles.js';
  import type { Color, Shape, Size } from '$lib/types.js';
  import { cleanClass, generateId } from '$lib/utilities/internal.js';
  import { mdiCheck, mdiMinus } from '@mdi/js';
  import { Checkbox as CheckboxPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
  import { tv } from 'tailwind-variants';

  type CheckboxProps = WithoutChildrenOrChild<CheckboxPrimitive.RootProps> & {
    color?: Color;
    shape?: Shape;
    size?: Size;
  };

  let {
    ref = $bindable(null),
    checked = $bindable(false),
    class: className,
    color = 'primary',
    shape = 'semi-round',
    size = 'small',
    ...restProps
  }: CheckboxProps = $props();

  const context = getFieldContext();
  const { readOnly, required, invalid, disabled, label, description, ...labelProps } = $derived(context());

  const containerStyles = tv({
    base: 'ring-offset-background focus-visible:ring-ring peer data-[state=checked]:bg-primary box-content overflow-hidden border-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50',
    variants: {
      shape: styleVariants.shape,
      borderColor: styleVariants.borderColor,
      size: {
        tiny: 'size-4',
        small: 'size-5',
        medium: 'size-6',
        large: 'size-8',
        giant: 'size-10',
      },
      roundedSize: {
        tiny: 'rounded-md',
        small: 'rounded-md',
        medium: 'rounded-md',
        large: 'rounded-lg',
        giant: 'rounded-xl',
      },
    },
  });

  const iconStyles = tv({
    variants: {
      fullWidth: {
        true: 'w-full',
      },
      filledColor: styleVariants.filledColor,
      filledColorHover: styleVariants.filledColorHover,
    },
  });

  const id = generateId();
  const inputId = `input-${id}`;
  const labelId = `label-${id}`;
  const descriptionId = $derived(description ? `description-${id}` : undefined);
</script>

{#snippet icon(icon: string)}
  <Icon
    {icon}
    size="100%"
    class={cleanClass(
      iconStyles({
        filledColor: color,
        filledColorHover: color,
      }),
    )}
  />
{/snippet}

<div class="flex flex-col gap-1">
  {#if label}
    <Label id={labelId} for={inputId} {label} requiredIndicator={required === 'indicator'} {...labelProps} />
    {#if description}
      <Text color="secondary" size="small" id={descriptionId}>{description}</Text>
    {/if}
  {/if}

  <CheckboxPrimitive.Root
    bind:ref
    class={cleanClass(
      containerStyles({
        size,
        borderColor: invalid ? 'danger' : color,
        shape,
        roundedSize: shape === 'semi-round' ? size : undefined,
      }),
      className,
    )}
    bind:checked
    disabled={disabled || readOnly}
    required={!!required}
    aria-readonly={disabled || readOnly}
    aria-describedby={descriptionId}
    {...restProps}
  >
    {#snippet children({ checked, indeterminate })}
      <div class={cleanClass('flex items-center justify-center text-current')}>
        {#if indeterminate}
          {@render icon(mdiMinus)}
        {:else if checked}
          {@render icon(mdiCheck)}
        {/if}
      </div>
    {/snippet}
  </CheckboxPrimitive.Root>
</div>
