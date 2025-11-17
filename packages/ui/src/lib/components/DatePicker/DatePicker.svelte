<script lang="ts">
  import DatePickerInternal from '$lib/internal/DatePicker.svelte';
  import type { DatePickerProps } from '$lib/types.js';
  import { CalendarDate, type DateValue } from '@internationalized/date';
  import { DateTime } from 'luxon';

  let { value = $bindable<DateTime | null>(null), onChange, minDate, maxDate, ...rest }: DatePickerProps = $props();

  // Convert DateTime to DateValue
  const toDateValue = (dt: DateTime | null | undefined): DateValue | undefined => {
    if (!dt) return undefined;
    return new CalendarDate(dt.year, dt.month, dt.day);
  };

  // Convert DateValue to DateTime
  const toDateTime = (dv: DateValue | undefined): DateTime | null => {
    if (!dv) return null;
    return DateTime.fromObject({ year: dv.year, month: dv.month, day: dv.day });
  };

  const handleChange = (date: DateValue | undefined) => {
    value = toDateTime(date);
    onChange?.(value);
  };

  const internalValue = $derived(toDateValue(value));
  const internalMinDate = $derived(toDateValue(minDate));
  const internalMaxDate = $derived(toDateValue(maxDate));
</script>

<DatePickerInternal
  date={internalValue}
  minDate={internalMinDate}
  maxDate={internalMaxDate}
  onChange={handleChange}
  {...rest}
/>
