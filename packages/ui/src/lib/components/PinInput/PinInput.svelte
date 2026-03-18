<script lang="ts">
  import { getFieldContext } from '$lib/common/context.svelte.js';
  import Label from '$lib/components/Label/Label.svelte';
  import { styleVariants } from '$lib/styles.js';
  import type { PinInputProps } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import { PinInput, REGEXP_ONLY_DIGITS } from 'bits-ui';
  import { tv } from 'tailwind-variants';

  let {
    shape = 'semi-round',
    size: initialSize,
    value = $bindable<string>(''),
    length,
    isVisible = true,
    onComplete,
  }: PinInputProps = $props();

  const context = getFieldContext();

  const { label, disabled, ...labelProps } = $derived(context());
  const size = $derived(initialSize ?? labelProps.size ?? 'large');

  const inputCommon = `
    flex items-center justify-center font-mono transition-all duration-75
    bg-gray-100 dark:bg-gray-800 group-has-disabled:bg-gray-300 dark:group-has-disabled:bg-gray-900
    group-has-disabled:text-dark dark:group-has-disabled:text-gray-200
    border-2 data-active:border-3 dark:group-not-has-disabled:border-gray-700 data-active:border-primary dark:data-active:border-primary
  `;
  const inputStyles = tv({
    base: cleanClass(inputCommon),
    variants: {
      shape: styleVariants.shape,
      size: {
        tiny: 'h-9 w-7',
        small: 'h-10 w-8',
        medium: 'h-11 w-9',
        large: 'h-12 w-10',
        giant: 'h-14 w-12',
      },
      textSize: styleVariants.textSize,
      roundedSize: {
        tiny: 'rounded-lg',
        small: 'rounded-lg',
        medium: 'rounded-xl',
        large: 'rounded-xl',
        giant: 'rounded-2xl',
      },
    },
  });

  const caretStyles = tv({
    base: 'caret h-1/2 bg-black',
    variants: {
      size: {
        tiny: 'w-px',
        small: 'w-px',
        medium: 'w-[1.5px]',
        large: 'w-[1.5px]',
        giant: 'w-[2px]',
      },
    },
  });

  const id = $props.id();
  const inputId = `input-${id}`;
  const labelId = `label-${id}`;
</script>

<div class="flex w-full flex-col gap-1">
  {#if label}
    <Label id={labelId} for={inputId} {label} {...labelProps} {size} />
  {/if}

  <PinInput.Root
    {inputId}
    aria-labelledby={label && labelId}
    {disabled}
    aria-disabled={disabled}
    class="group flex items-center gap-2"
    maxlength={length ?? 6}
    pattern={REGEXP_ONLY_DIGITS}
    type={isVisible ? 'text' : 'password'}
    {onComplete}
    bind:value
  >
    {#snippet children({ cells })}
      {#each cells as cell, i (i)}
        <PinInput.Cell
          {cell}
          class={inputStyles({
            shape,
            size,
            textSize: size,
            roundedSize: shape === 'semi-round' ? size : undefined,
          })}
        >
          {#if cell.char !== null}
            <div>
              {isVisible ? cell.char : '●'}
            </div>
          {/if}
          {#if cell.hasFakeCaret}
            <div class="absolute flex h-full items-center justify-center">
              <div class={caretStyles({ size })}></div>
            </div>
          {/if}
        </PinInput.Cell>
      {/each}
    {/snippet}
  </PinInput.Root>
</div>

<style>
  .caret {
    animation: blink 1.5s step-end infinite;
  }
  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
</style>
