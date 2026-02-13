<script lang="ts">
  import { getFieldContext } from '$lib/common/context.svelte.js';
  import Icon from '$lib/components/Icon/Icon.svelte';
  import IconButton from '$lib/components/IconButton/IconButton.svelte';
  import Label from '$lib/components/Label/Label.svelte';
  import { zIndex } from '$lib/constants.js';
  import { t } from '$lib/services/translation.svelte.js';
  import { getLocale } from '$lib/state/locale-state.svelte.js';
  import { styleVariants } from '$lib/styles.js';
  import type { Shape, Size } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import type { DateValue } from '@internationalized/date';
  import { mdiCalendar, mdiChevronLeft, mdiChevronRight } from '@mdi/js';
  import { DatePicker } from 'bits-ui';
  import { tv } from 'tailwind-variants';

  type Props = {
    onChange?: (date?: DateValue) => void;
    minDate?: DateValue;
    maxDate?: DateValue;
    date?: DateValue;
    class?: string;
    shape?: Shape;
    size?: Size;
  };

  let {
    onChange,
    minDate,
    maxDate,
    date = $bindable<DateValue | undefined>(undefined),
    class: className,
    shape = 'semi-round',
    size: initialSize,
  }: Props = $props();

  const context = getFieldContext();
  const { readOnly, required, invalid, disabled, label, ...labelProps } = $derived(context());
  const size = $derived(initialSize ?? labelProps.size ?? 'small');

  const containerStyles = tv({
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

  const buttonStyles = tv({
    base: 'hover:bg-light-200 hover:dark:bg-light-300 flex h-10 w-10 items-center justify-center rounded-lg hover:cursor-pointer',
  });

  const segmentStyles = tv({
    base: 'focus:bg-light-300 focus:text-light-900 data-focused:bg-light-300 data-focused:text-light-900 data-placeholder:text-light-400 dark:focus:bg-light-700 dark:focus:text-light-100 dark:data-focused:bg-light-300 dark:data-focused:text-light-900 rounded px-1 py-0.5 tabular-nums outline-none data-disabled:cursor-not-allowed',
    variants: {
      textSize: styleVariants.textSize,
    },
  });
</script>

<div class={cleanClass('flex w-full flex-col gap-1', className)}>
  <DatePicker.Root
    onValueChange={onChange}
    minValue={minDate}
    maxValue={maxDate}
    bind:value={date}
    readonly={readOnly}
    locale={getLocale()}
    {disabled}
  >
    {#if label}
      <DatePicker.Label>
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
      </DatePicker.Label>
    {/if}

    <DatePicker.Input
      class={containerStyles({
        shape,
        roundedSize: shape === 'semi-round' ? size : undefined,
        invalid,
      })}
    >
      {#snippet children({ segments })}
        <div class={cleanClass(styleVariants.inputCommon, 'w-full px-3 py-2 font-medium')}>
          {#each segments as { part, value }, i (`segment-${i}`)}
            <DatePicker.Segment {part} class={segmentStyles({ textSize: size })}>
              {value}
            </DatePicker.Segment>
          {/each}
        </div>
        <DatePicker.Trigger class="mr-2 rounded-full">
          <IconButton
            variant="ghost"
            shape="round"
            color="secondary"
            {size}
            icon={mdiCalendar}
            {disabled}
            aria-label={t('open_calendar')}
          />
        </DatePicker.Trigger>
      {/snippet}
    </DatePicker.Input>
    <DatePicker.Portal>
      <DatePicker.Content
        class="bg-subtle text-dark rounded-xl border p-4 shadow-lg outline-none select-none {zIndex.SelectDropdown}"
        sideOffset={10}
      >
        <DatePicker.Calendar class="w-full">
          {#snippet children({ months, weekdays })}
            <DatePicker.Header class="mb-3 flex items-center justify-between">
              <DatePicker.PrevButton class={buttonStyles()}>
                <Icon icon={mdiChevronLeft} size="1.25rem" />
              </DatePicker.PrevButton>
              <DatePicker.Heading class="text-sm font-semibold" />
              <DatePicker.NextButton class={buttonStyles()}>
                <Icon icon={mdiChevronRight} size="1.25rem" />
              </DatePicker.NextButton>
            </DatePicker.Header>
            {#each months as month (`month-${month.value}`)}
              <DatePicker.Grid class="w-full border-collapse">
                <DatePicker.GridHead>
                  <DatePicker.GridRow class="flex w-full">
                    {#each weekdays as day, i (`weekday-${i}`)}
                      <DatePicker.HeadCell
                        class="text-muted flex h-8 w-8 flex-1 items-center justify-center text-xs font-medium"
                      >
                        {day.slice(0, 2)}
                      </DatePicker.HeadCell>
                    {/each}
                  </DatePicker.GridRow>
                </DatePicker.GridHead>
                <DatePicker.GridBody>
                  {#each month.weeks as weekDates (`weekDates-${weekDates}`)}
                    <DatePicker.GridRow class="flex w-full">
                      {#each weekDates as date (`date-${date.toString()}`)}
                        <DatePicker.Cell {date} month={month.value} class="flex-1">
                          <DatePicker.Day
                            class="{buttonStyles()} data-selected:bg-primary data-selected:hover:bg-primary-300 data-selected:text-light data-today:border-primary-200 data-today:dark:border-primary-400 data-today:dark:bg-primary-200 data-today:bg-primary-50 data-outside-month:text-light-400 data-unavailable:text-light-300 border border-transparent text-sm data-disabled:cursor-not-allowed data-disabled:opacity-40 data-unavailable:cursor-not-allowed data-unavailable:line-through"
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
