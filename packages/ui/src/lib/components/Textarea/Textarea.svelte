<script lang="ts">
  import { getFieldContext } from '$lib/common/context.svelte.js';
  import Label from '$lib/components/Label/Label.svelte';
  import Text from '$lib/components/Text/Text.svelte';
  import { styleVariants } from '$lib/styles.js';
  import type { TextareaProps } from '$lib/types.js';
  import { cleanClass, generateId } from '$lib/utilities/internal.js';
  import { tv } from 'tailwind-variants';

  let {
    ref = $bindable(null),
    containerRef = $bindable(null),
    shape = 'semi-round',
    size: initialSize,
    variant = 'input',
    class: className,
    rows = variant === 'ghost' ? 1 : undefined,
    grow = variant === 'ghost',
    value = $bindable<string>(),
    ...restProps
  }: TextareaProps = $props();

  const context = getFieldContext();
  const { label, description, readOnly, required, invalid, disabled, ...labelProps } = $derived(context());
  const size = $derived(initialSize ?? labelProps.size ?? 'small');

  const commonStyles = tv({
    base: 'w-full outline-none disabled:cursor-not-allowed',
    variants: {
      textSize: styleVariants.textSize,
      grow: { true: 'resize-none', false: '' },
    },
  });

  const ghostStyles = tv({
    base: 'pb-2',
    variants: {
      state: {
        active:
          'hover:border-b-light-200 focus-within:hover:border-primary focus-within:border-primary focus-within:border-b-2 hover:border-b-2',
        error: 'border-b-danger border-b-2',
        disabled: '',
      },
    },
  });

  const inputStyles = tv({
    base: 'focus-within:ring-primary dark:focus-within:ring-primary bg-gray-100 ring-1 ring-gray-200 focus-within:ring-1 disabled:bg-gray-300 disabled:text-gray-400 dark:bg-gray-800 dark:ring-black dark:disabled:bg-gray-800 dark:disabled:text-gray-200',
    variants: {
      shape: styleVariants.shape,
      padding: {
        base: 'px-4 py-3',
        round: 'px-5 py-3',
      },
      invalid: { true: 'border-danger/80 border', false: '' },
      roundedSize: {
        tiny: 'rounded-xl',
        small: 'rounded-xl',
        medium: 'rounded-2xl',
        large: 'rounded-2xl',
        giant: 'rounded-2xl',
      },
    },
  });

  const id = generateId();
  const inputId = `input-${id}`;
  const labelId = `label-${id}`;
  const descriptionId = $derived(description ? `description-${id}` : undefined);

  const parseStyleNumber = (raw: string) => {
    if (raw === 'none') {
      return;
    }

    const value = Number.parseFloat(raw);
    if (Number.isNaN(value)) {
      return;
    }

    return value;
  };

  const autogrow = (element: HTMLTextAreaElement | null) => {
    if (!element || !grow || element.scrollHeight === 0) {
      return;
    }

    element.style.minHeight = '0';
    element.style.height = 'auto';

    const style = getComputedStyle(element);
    const borderTopWidth = parseStyleNumber(style.borderTopWidth) ?? 0;
    const borderBottomWidth = parseStyleNumber(style.borderBottomWidth) ?? 0;
    const height = element.scrollHeight + borderTopWidth + borderBottomWidth;

    element.style.height = `${height}px`;

    // Show scrollbar only if there is a max-height and content exceeds it
    const maxHeight = parseStyleNumber(style.maxHeight);
    const hasMaxHeight = maxHeight !== undefined;
    if (hasMaxHeight && height > maxHeight) {
      element.style.overflow = 'auto';
    } else {
      element.style.overflow = 'hidden';
    }
  };

  $effect(() => {
    void value;
    autogrow(ref);
  });
</script>

<div class="flex w-full flex-col gap-1" bind:this={containerRef}>
  {#if label}
    <Label id={labelId} for={inputId} {label} requiredIndicator={required === 'indicator'} {...labelProps} {size} />
  {/if}

  {#if description}
    <Text color="secondary" size="small" id={descriptionId}>{description}</Text>
  {/if}

  <div class="relative w-full">
    <textarea
      id={inputId}
      aria-labelledby={label && labelId}
      required={!!required}
      aria-required={!!required}
      {disabled}
      aria-disabled={disabled}
      aria-describedby={descriptionId}
      readonly={readOnly}
      aria-readonly={readOnly}
      {rows}
      class={cleanClass(
        commonStyles({ textSize: size, grow }),
        variant === 'input' &&
          inputStyles({
            shape,
            invalid,
            padding: shape === 'round' ? 'round' : 'base',
            roundedSize: shape === 'semi-round' ? size : undefined,
          }),
        variant === 'ghost' && ghostStyles({ state: invalid ? 'error' : disabled || readOnly ? 'disabled' : 'active' }),
        className,
      )}
      bind:this={ref}
      bind:value
      {...restProps}
    ></textarea>
  </div>
</div>

<style>
  textarea::-ms-reveal {
    display: none;
  }
</style>
