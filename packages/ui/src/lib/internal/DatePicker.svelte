<script lang="ts">
  import { getFieldContext } from '$lib/common/context.svelte.js';
  import Field from '$lib/components/Field/Field.svelte';
  import Icon from '$lib/components/Icon/Icon.svelte';
  import IconButton from '$lib/components/IconButton/IconButton.svelte';
  import Label from '$lib/components/Label/Label.svelte';
  import { zIndex } from '$lib/constants.js';
  import { styleVariants } from '$lib/styles.js';
  import type { Shape, Size } from '$lib/types.js';
  import { cleanClass, generateId } from '$lib/utilities/internal.js';
  import type { DateValue } from '@internationalized/date';
  import { mdiCalendar, mdiChevronLeft, mdiChevronRight } from '@mdi/js';
  import { DatePicker } from 'bits-ui';
  import { tv } from 'tailwind-variants';

  interface Props {
    onChange?: (date: DateValue | undefined) => void;
    minDate?: DateValue;
    maxDate?: DateValue;
    date?: DateValue;
    class?: string;
    shape?: Shape;
    size?: Size;
    disabled?: boolean;
  }

  let {
    onChange,
    minDate,
    maxDate,
    date,
    class: className,
    shape = 'semi-round',
    size = 'small',
    disabled = false,
  }: Props = $props();

  const { readOnly, required, invalid, disabled: fieldDisabled, label, ...labelProps } = $derived(getFieldContext());

  const id = generateId();
  const inputId = `datepicker-${id}`;
  const labelId = `label-${id}`;

  const containerStyles = tv({
    base: 'flex w-full items-center bg-gray-200 py-2 outline-none disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-400 dark:bg-gray-600 dark:disabled:bg-gray-800 dark:disabled:text-gray-200',
    variants: {
      shape: styleVariants.shape,
      roundedSize: {
        tiny: 'rounded-xl',
        small: 'rounded-xl',
        medium: 'rounded-2xl',
        large: 'rounded-2xl',
        giant: 'rounded-2xl',
      },
      invalid: {
        true: 'border-danger/80 border',
        false: '',
      },
    },
  });

  const segmentStyles = tv({
    base: 'rounded px-1 py-0.5 tabular-nums outline-none focus:bg-gray-300 focus:text-gray-900 data-[disabled]:cursor-not-allowed data-[focused]:bg-gray-300 data-[focused]:text-gray-900 data-[placeholder]:text-gray-400 dark:focus:bg-gray-700 dark:focus:text-gray-100 dark:data-[focused]:bg-gray-700 dark:data-[focused]:text-gray-100',
    variants: {
      textSize: styleVariants.textSize,
    },
  });

  const firstSegmentStyles = 'ml-4';
  const lastSegmentStyles = 'mr-auto';
</script>

<div class={cleanClass('flex w-full flex-col gap-1', className)}>
  {#if label}
    <Label id={labelId} for={inputId} {label} requiredIndicator={required === 'indicator'} {...labelProps} />
  {/if}

  <DatePicker.Root onValueChange={onChange} minValue={minDate} maxValue={maxDate} bind:value={date} {disabled}>
    <Field {readOnly} {required} {disabled} {invalid}>
      <DatePicker.Input
        id={inputId}
        aria-labelledby={labelId}
        class={containerStyles({
          shape,
          roundedSize: shape === 'semi-round' ? size : undefined,
          invalid,
        })}
      >
        {#snippet children({ segments })}
          {#each segments as { part, value }, i}
            <DatePicker.Segment
              {part}
              class={segmentStyles({ textSize: size }) +
                (i === 0 ? ' ' + firstSegmentStyles : '') +
                (i === segments.length - 1 ? ' ' + lastSegmentStyles : '')}
            >
              {value}
            </DatePicker.Segment>
          {/each}
          <DatePicker.Trigger class="mr-2">
            <IconButton
              variant="ghost"
              shape="round"
              color="secondary"
              {size}
              icon={mdiCalendar}
              {disabled}
              aria-label="Open calendar"
            />
          </DatePicker.Trigger>
        {/snippet}
      </DatePicker.Input>
    </Field>
    <DatePicker.Portal>
      <DatePicker.Content
        class="bg-light text-dark rounded-xl border p-4 shadow-lg outline-none select-none {zIndex.SelectDropdown}"
        sideOffset={10}
      >
        <DatePicker.Calendar class="w-full">
          {#snippet children({ months, weekdays })}
            <DatePicker.Header class="mb-3 flex items-center justify-between">
              <DatePicker.PrevButton
                class="hover:bg-subtle flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
              >
                <Icon icon={mdiChevronLeft} size="1.25rem" />
              </DatePicker.PrevButton>
              <DatePicker.Heading class="text-sm font-semibold" />
              <DatePicker.NextButton
                class="hover:bg-subtle flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
              >
                <Icon icon={mdiChevronRight} size="1.25rem" />
              </DatePicker.NextButton>
            </DatePicker.Header>
            {#each months as month}
              <DatePicker.Grid class="w-full border-collapse">
                <DatePicker.GridHead>
                  <DatePicker.GridRow class="flex w-full">
                    {#each weekdays as day}
                      <DatePicker.HeadCell
                        class="text-muted flex h-8 w-8 flex-1 items-center justify-center text-xs font-medium"
                      >
                        {day.slice(0, 2)}
                      </DatePicker.HeadCell>
                    {/each}
                  </DatePicker.GridRow>
                </DatePicker.GridHead>
                <DatePicker.GridBody>
                  {#each month.weeks as weekDates}
                    <DatePicker.GridRow class="flex w-full">
                      {#each weekDates as date}
                        <DatePicker.Cell {date} month={month.value} class="flex-1">
                          <DatePicker.Day
                            class="hover:bg-subtle data-[selected]:bg-primary data-[selected]:text-light data-[today]:border-primary flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-sm transition-colors data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40 data-[outside-month]:text-gray-400 data-[unavailable]:cursor-not-allowed data-[unavailable]:text-gray-300 data-[unavailable]:line-through"
                          >
                            {date.day}
                          </DatePicker.Day>
                        </DatePicker.Cell>
                      {/each}
                    </DatePicker.GridRow>
                  {/each}
                </DatePicker.GridBody>
              </DatePicker.Grid>
            {/each}
          {/snippet}
        </DatePicker.Calendar>
      </DatePicker.Content>
    </DatePicker.Portal>
  </DatePicker.Root>
</div>
