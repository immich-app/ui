<script lang="ts">
  import { getFieldContext } from '$lib/common/context.svelte.js';
  import Label from '$lib/components/Label/Label.svelte';
  import Text from '$lib/components/Text/Text.svelte';
  import { styleVariants } from '$lib/styles.js';
  import type { TextareaProps } from '$lib/types.js';
  import { cleanClass, generateId } from '$lib/utilities/internal.js';
  import { onMount } from 'svelte';
  import type { FormEventHandler } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  let {
    ref = $bindable(null),
    containerRef = $bindable(null),
    shape = 'semi-round',
    size = 'medium',
    class: className,
    grow,
    value = $bindable<string>(),
    ...restProps
  }: TextareaProps = $props();

  const { label, description, readOnly, required, invalid, disabled, ...labelProps } = $derived(getFieldContext());

  const styles = tv({
    base: 'focus-within:ring-primary dark:focus-within:ring-primary w-full bg-gray-100 ring-1 ring-gray-200 outline-none focus-within:ring-1 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-400 dark:bg-gray-800 dark:ring-black dark:disabled:bg-gray-800 dark:disabled:text-gray-200',
    variants: {
      shape: styleVariants.shape,
      padding: {
        base: 'px-4 py-3',
        round: 'px-5 py-3',
      },
      grow: {
        true: 'resize-none overflow-hidden',
        false: '',
      },
      roundedSize: {
        tiny: 'rounded-xl',
        small: 'rounded-xl',
        medium: 'rounded-2xl',
        large: 'rounded-2xl',
        giant: 'rounded-2xl',
      },
      textSize: styleVariants.textSize,
      invalid: {
        true: 'border-danger/80 border',
        false: '',
      },
    },
  });

  const id = generateId();
  const inputId = `input-${id}`;
  const labelId = `label-${id}`;
  const descriptionId = $derived(description ? `description-${id}` : undefined);

  const autogrow = (element: HTMLTextAreaElement | null) => {
    if (element && grow) {
      element.style.minHeight = '0';
      element.style.height = 'auto';
      element.style.height = `${element.scrollHeight}px`;

      // Show scrollbar only if there is a max-height and content exceeds it
      const maxHeight = parseFloat(getComputedStyle(element).maxHeight);
      const hasMaxHeight = maxHeight != undefined;
      if (hasMaxHeight && element.scrollHeight > maxHeight) {
        element.style.overflow = 'auto';
      }
    }
  };

  const onInput: FormEventHandler<HTMLTextAreaElement> = (event) => {
    autogrow(event.target as HTMLTextAreaElement);
    restProps?.oninput?.(event);
  };

  onMount(() => autogrow(ref));
</script>

<div class="flex w-full flex-col gap-1" bind:this={containerRef}>
  {#if label}
    <Label id={labelId} for={inputId} {label} requiredIndicator={required === 'indicator'} {...labelProps} />
  {/if}

  {#if description}
    <Text color="secondary" size="small" id={descriptionId}>{description}</Text>
  {/if}

  <div class="relative w-full">
    <textarea
      oninput={onInput}
      id={inputId}
      aria-labelledby={label && labelId}
      required={!!required}
      aria-required={!!required}
      {disabled}
      aria-disabled={disabled}
      aria-describedby={descriptionId}
      readonly={readOnly}
      aria-readonly={readOnly}
      class={cleanClass(
        styles({
          shape,
          textSize: size,
          padding: shape === 'round' ? 'round' : 'base',
          grow,
          roundedSize: shape === 'semi-round' ? size : undefined,
          invalid,
        }),
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
