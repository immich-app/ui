<script lang="ts">
  import { getFieldContext } from '$lib/common/context.svelte.js';
  import Label from '$lib/components/Label/Label.svelte';
  import Text from '$lib/components/Text/Text.svelte';
  import type { Color } from '$lib/types.js';
  import { cleanClass, generateId } from '$lib/utilities/internal.js';
  import { Switch, type WithoutChildrenOrChild } from 'bits-ui';
  import { tv } from 'tailwind-variants';

  type Props = {
    checked?: boolean;
    color?: Color;
    disabled?: boolean;
    class?: string;
  } & WithoutChildrenOrChild<Switch.RootProps>;

  let {
    id = generateId(),
    checked = $bindable(false),
    ref = $bindable(null),
    color = 'primary',
    class: className,
    ...restProps
  }: Props = $props();

  const { readOnly, required, disabled, label, description, ...labelProps } = $derived(getFieldContext());

  const enabled = $derived(checked && !disabled);

  const wrapper = tv({
    base: 'relative flex flex-col justify-center',
    variants: {
      disabled: {
        true: 'cursor-not-allowed opacity-38',
        false: 'cursor-pointer',
      },
    },
  });

  const bar = tv({
    base: 'h-8 w-13 rounded-full border-2',
    variants: {
      fillColor: {
        default: 'border-gray-400 bg-gray-200 dark:border-gray-500 dark:bg-gray-800',
        primary: 'bg-primary-100 dark:bg-primary-800 border-transparent',
        secondary: 'border-transparent bg-neutral-200 dark:bg-neutral-700',
        success: 'bg-success-100 dark:bg-success-800 border-transparent',
        danger: 'bg-danger-100 dark:bg-danger-800 border-transparent',
        warning: 'bg-warning-100 dark:bg-warning-800 border-transparent',
        info: 'bg-info-100 dark:bg-info-800 border-transparent',
      },
    },
  });

  const dot = tv({
    base: 'absolute h-4 w-4 origin-center rounded-full transition-transform duration-100',
    variants: {
      checked: {
        true: 'translate-x-7 scale-150 rtl:-translate-x-7',
        false: 'translate-x-2 rtl:-translate-x-2',
      },
      fillColor: {
        default: 'bg-gray-600 dark:bg-gray-500',
        primary: 'bg-primary',
        secondary: 'bg-dark',
        success: 'bg-success',
        danger: 'bg-danger',
        warning: 'bg-warning',
        info: 'bg-info',
      },
    },
  });

  const inputId = `input-${id}`;
  const labelId = `label-${id}`;
  const descriptionId = $derived(description ? `description-${id}` : undefined);
</script>

<Switch.Root
  bind:checked
  bind:ref
  id={inputId}
  disabled={disabled || readOnly}
  required={!!required}
  class={cleanClass(label && 'w-full', className)}
  aria-readonly={readOnly}
  aria-labelledby={labelId}
  aria-describedby={descriptionId}
  {...restProps}
>
  <Switch.Thumb>
    {#snippet child()}
      <div class={cleanClass(label && 'flex items-center justify-between gap-1')}>
        {#if label}
          <div class="text-start">
            <Label id={labelId} for={inputId} {label} requiredIndicator={required === 'indicator'} {...labelProps} />
            {#if description}
              <Text color="muted" size="small" id={descriptionId}>{description}</Text>
            {/if}
          </div>
        {/if}
        <span class={wrapper({ disabled })}>
          <span class={bar({ fillColor: enabled ? color : 'default' })}> </span>
          <span class={dot({ checked: enabled, fillColor: enabled ? color : 'default' })}></span>
        </span>
      </div>
    {/snippet}
  </Switch.Thumb>
</Switch.Root>
