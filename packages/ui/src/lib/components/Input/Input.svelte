<script lang="ts">
  import { getFieldContext } from '$lib/common/context.svelte.js';
  import Icon from '$lib/components/Icon/Icon.svelte';
  import Label from '$lib/components/Label/Label.svelte';
  import Text from '$lib/components/Text/Text.svelte';
  import { styleVariants } from '$lib/styles.js';
  import type { InputProps } from '$lib/types.js';
  import { cleanClass, generateId, isIconLike } from '$lib/utilities/internal.js';
  import { tv } from 'tailwind-variants';

  let {
    ref = $bindable(null),
    containerRef = $bindable(null),
    shape = 'semi-round',
    size = 'medium',
    class: className,
    value = $bindable<string>(),
    leadingIcon,
    trailingIcon,
    trailingText,
    inputSize,
    ...restProps
  }: InputProps = $props();

  const { label, description, readOnly, required, invalid, disabled, ...labelProps } = $derived(getFieldContext());

  const iconStyles = tv({
    base: 'flex shrink-0 items-center justify-center',
    variants: {
      size: {
        tiny: 'w-6',
        small: 'w-8',
        medium: 'w-10',
        large: 'w-12',
        giant: 'w-14',
      },
    },
  });

  const containerStyles = tv({
    base: cleanClass(styleVariants.inputContainerCommon, 'flex w-full items-center'),
    variants: {
      shape: styleVariants.shape,
      roundedSize: styleVariants.inputRoundedSize,
      invalid: {
        true: 'focus-within:ring-danger dark:focus-within:ring-danger dark:ring-danger-300 ring-danger-300 ring-1',
        false: '',
      },
    },
  });

  const inputStyles = tv({
    base: cleanClass(styleVariants.inputCommon, 'flex-1 py-2'),
    variants: {
      textSize: styleVariants.textSize,
      leadingPadding: {
        base: 'pl-4',
        icon: 'pl-0',
      },
      trailingPadding: {
        base: 'pr-4',
        icon: 'pr-0',
      },
      roundedSize: {
        tiny: 'rounded-lg',
        small: 'rounded-lg',
        medium: 'rounded-lg',
        large: 'rounded-lg',
        giant: 'rounded-lg',
      },
    },
  });

  const trailingTextStyles = tv({
    variants: {
      padding: {
        base: 'px-4',
        icon: 'pl-4',
      },
    },
  });

  const id = generateId();
  const inputId = `input-${id}`;
  const labelId = `label-${id}`;
  const descriptionId = $derived(description ? `description-${id}` : undefined);
</script>

<div class="flex w-full flex-col gap-1" bind:this={containerRef}>
  {#if label}
    <Label
      id={labelId}
      for={inputId}
      {label}
      requiredIndicator={required === 'indicator'}
      {...labelProps}
      class="font-medium"
    />
  {/if}

  {#if description}
    <Text color="muted" size="small" id={descriptionId} class="mb-1">{description}</Text>
  {/if}

  <div
    class={cleanClass(
      containerStyles({
        shape,
        roundedSize: shape === 'semi-round' ? size : undefined,
        invalid,
      }),
      className,
    )}
  >
    {#if leadingIcon}
      <div tabindex="-1" class={iconStyles({ size })}>
        {#if isIconLike(leadingIcon)}
          <Icon size="60%" icon={leadingIcon} />
        {:else}
          {@render leadingIcon()}
        {/if}
      </div>
    {/if}

    <input
      id={inputId}
      aria-labelledby={label && labelId}
      required={!!required}
      aria-required={!!required}
      {disabled}
      aria-disabled={disabled}
      aria-describedby={descriptionId}
      readonly={readOnly}
      size={inputSize}
      aria-readonly={readOnly}
      class={inputStyles({
        textSize: size,
        leadingPadding: leadingIcon ? 'icon' : 'base',
        trailingPadding: trailingIcon || trailingText ? 'icon' : 'base',
        roundedSize: shape === 'semi-round' ? size : undefined,
      })}
      bind:this={ref}
      bind:value
      {...restProps}
    />
    {#if trailingText}
      <Text {size} color="muted" class={trailingTextStyles({ padding: trailingIcon ? 'icon' : 'base' })}
        >{trailingText}</Text
      >
    {/if}

    {#if trailingIcon}
      <div tabindex="-1" class={iconStyles({ size })}>
        {#if isIconLike(trailingIcon)}
          <Icon size="60%" icon={trailingIcon} />
        {:else}
          {@render trailingIcon()}
        {/if}
      </div>
    {/if}
  </div>
</div>

<style>
  input::-ms-reveal {
    display: none;
  }
</style>
