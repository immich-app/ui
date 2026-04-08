<script lang="ts">
  import { getFieldContext } from '$lib/common/context.svelte.js';
  import Label from '$lib/components/Label/Label.svelte';
  import Text from '$lib/components/Text/Text.svelte';
  import InputIcon from '$lib/internal/InputIcon.svelte';
  import { inputContainerStyles, inputStyles } from '$lib/styles.js';
  import type { InputProps } from '$lib/types.js';
  import { cleanClass, generateId } from '$lib/utilities/internal.js';
  import { tv } from 'tailwind-variants';

  let {
    ref = $bindable(null),
    containerRef = $bindable(null),
    shape = 'semi-round',
    size: initialSize,
    class: className,
    value = $bindable<string>(),
    leadingIcon,
    trailingIcon,
    trailingText,
    inputSize,
    ...restProps
  }: InputProps = $props();

  const context = getFieldContext();

  const { label, description, readOnly, required, invalid, disabled, ...labelProps } = $derived(context());
  const size = $derived(initialSize ?? labelProps.size ?? 'small');

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

<div class="flex w-full flex-col gap-1">
  {#if label}
    <Label id={labelId} for={inputId} {label} requiredIndicator={required === 'indicator'} {...labelProps} {size} />
  {/if}

  {#if description}
    <Text color="muted" size="small" id={descriptionId} class="mb-2">{description}</Text>
  {/if}

  <div
    bind:this={containerRef}
    class={cleanClass(
      inputContainerStyles({
        disabled,
        shape,
        roundedSize: shape === 'semi-round' ? size : undefined,
        invalid,
      }),
      className,
    )}
  >
    <InputIcon icon={leadingIcon} {size} />

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

    <InputIcon icon={trailingIcon} {size} />
  </div>
</div>

<style>
  input::-ms-reveal {
    display: none;
  }
</style>
