<script lang="ts">
  import { DatePicker, Field, Stack } from '@immich/ui';
  import { DateTime } from 'luxon';
</script>

<Stack gap={4} class="max-w-[250px]">
  <Field label="Required" required="indicator">
    <DatePicker />
  </Field>
  <Field label="Invalid" invalid>
    <DatePicker />
  </Field>
  <Field label="Disabled" disabled>
    <DatePicker />
  </Field>
  <Field label="Minimum date">
    <DatePicker minDate={DateTime.now().minus({ days: 1 })} />
  </Field>
  <Field label="Maximum date">
    <DatePicker maxDate={DateTime.now().plus({ days: 1 })} />
  </Field>
</Stack>
