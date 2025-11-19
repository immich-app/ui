<script lang="ts">
  import DatePickerInternal from '$lib/internal/DatePicker.svelte';
  import type { DatePickerProps } from '$lib/types.js';
  import { CalendarDate, type DateValue } from '@internationalized/date';
  import { DateTime } from 'luxon';

  let {
    value = $bindable<DateTime | undefined>(undefined),
    onChange,
    minDate,
    maxDate,
    ...rest
  }: DatePickerProps = $props();

  // Note: DatePickerInternal/bits.ui uses DateValue, while this component uses DateTime from luxon

  // Convert DateTime to DateValue
  function toDateValue(dateTime?: DateTime): DateValue | undefined {
    if (!dateTime) {
      return;
    }
    return new CalendarDate(dateTime.year, dateTime.month, dateTime.day);
  }

  // Convert DateValue to DateTime
  function toDateTime(dateValue?: DateValue): DateTime | undefined {
    if (!dateValue) {
      return;
    }

    return DateTime.fromObject({ year: dateValue.year, month: dateValue.month, day: dateValue.day });
  }

  function handleChange(date: DateValue | undefined) {
    onChange?.(toDateTime(date));
  }
</script>

<DatePickerInternal
  bind:date={() => toDateValue(value), (dateValue) => (value = toDateTime(dateValue))}
  minDate={toDateValue(minDate)}
  maxDate={toDateValue(maxDate)}
  onChange={handleChange}
  {...rest}
/>
