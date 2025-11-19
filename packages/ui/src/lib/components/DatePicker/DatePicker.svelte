<script lang="ts">
  import DatePickerInternal from '$lib/internal/DatePicker.svelte';
  import type { DatePickerProps } from '$lib/types.js';
  import { CalendarDate, type DateValue } from '@internationalized/date';
  import { DateTime } from 'luxon';

  let { value = $bindable<DateTime | null>(null), onChange, minDate, maxDate, ...rest }: DatePickerProps = $props();

  // Note: DatePickerInternal/bits.ui uses DateValue, while this component uses DateTime from luxon

  // Convert DateTime to DateValue
  function toDateValue(dt: DateTime | null | undefined): DateValue | undefined {
    if (!dt) return undefined;
    return new CalendarDate(dt.year, dt.month, dt.day);
  }

  // Convert DateValue to DateTime
  function toDateTime(dv: DateValue | undefined): DateTime | null {
    if (!dv) return null;
    return DateTime.fromObject({ year: dv.year, month: dv.month, day: dv.day });
  }

  function handleChange(date: DateValue | undefined) {
    value = toDateTime(date);
    onChange?.(value);
  }
</script>

<DatePickerInternal
  date={toDateValue(value)}
  minDate={toDateValue(minDate)}
  maxDate={toDateValue(maxDate)}
  onChange={handleChange}
  {...rest}
/>
