<script lang="ts">
  import { getFieldContext } from '$lib/common/context.svelte.js';
  import Label from '$lib/components/Label/Label.svelte';
  import InputIcon from '$lib/internal/InputIcon.svelte';
  import { getLocale } from '$lib/state/locale-state.svelte.js';
  import { inputContainerStyles, inputStyles, styleVariants } from '$lib/styles.js';
  import type { TimeInputProps } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import { TimeField, type TimeValue } from 'bits-ui';
  import { tv } from 'tailwind-variants';

  let {
    ref = $bindable(null),
    class: className,
    leadingIcon,
    trailingIcon,
    containerRef = $bindable(null),
    onChange,
    minValue,
    maxValue,
    value = $bindable<TimeValue | undefined>(),
    shape = 'semi-round',
    size: initialSize,
    granularity = 'second',
  }: TimeInputProps = $props();

  const context = getFieldContext();
  const { readOnly, required, invalid, disabled, label, ...labelProps } = $derived(context());
  const size = $derived(initialSize ?? labelProps.size ?? 'small');

  const styles = tv({
    base: cleanClass(styleVariants.inputContainerCommon, 'flex w-full items-center'),
    variants: {
      shape: styleVariants.shape,
      roundedSize: styleVariants.inputRoundedSize,
      invalid: {
        true: 'border-danger/80 border',
        false: '',
      },
    },
  });

  const segmentStyles = tv({
    base: 'focus:bg-light-300 focus:text-light-900 data-focused:bg-light-300 data-focused:text-light-900 data-placeholder:text-light-400 dark:focus:bg-light-700 dark:focus:text-light-100 dark:data-focused:bg-light-300 dark:data-focused:text-light-900 rounded px-0.5 py-0.5 tabular-nums outline-none data-disabled:cursor-not-allowed',
    variants: {
      textSize: styleVariants.textSize,
    },
  });
</script>

<div bind:this={containerRef} class={cleanClass('flex w-full flex-col gap-1', className)}>
  <TimeField.Root
    onValueChange={onChange}
    {minValue}
    {maxValue}
    {granularity}
    bind:value
    readonly={readOnly}
    locale={getLocale()}
    {disabled}
  >
    {#if label}
      <TimeField.Label>
        {#snippet child({ props })}
          <Label
            {...labelProps}
            {...props}
            class={cleanClass(labelProps.class, props.class)}
            requiredIndicator={required === 'indicator'}
            {label}
            {size}
          />
        {/snippet}
      </TimeField.Label>
    {/if}

    <TimeField.Input
      bind:ref
      class={styles({
        shape,
        roundedSize: shape === 'semi-round' ? size : undefined,
        invalid,
      })}
    >
      {#snippet children({ segments })}
        <div
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

          <div
            class={cleanClass(
              inputStyles({
                textSize: size,
                leadingPadding: leadingIcon ? 'icon' : 'base',
                trailingPadding: trailingIcon ? 'icon' : 'base',
                roundedSize: shape === 'semi-round' ? size : undefined,
              }),
            )}
          >
            {#each segments as { part, value }, i (`segment-${i}`)}
              {#if part === 'literal'}
                <TimeField.Segment {part} class="text-muted p-px">
                  {value}
                </TimeField.Segment>
              {:else}
                <TimeField.Segment {part} class={segmentStyles({ textSize: size })}>
                  {value}
                </TimeField.Segment>
              {/if}
            {/each}
          </div>

          <InputIcon icon={trailingIcon} {size} />
        </div>
      {/snippet}
    </TimeField.Input>
  </TimeField.Root>
</div>
