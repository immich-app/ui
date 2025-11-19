<script lang="ts">
  import DatePicker from '$lib/components/DatePicker/DatePicker.svelte';
  import Field from '$lib/components/Field/Field.svelte';
  import Stack from '$lib/components/Stack/Stack.svelte';
  import { DateTime } from 'luxon';
</script>

<Stack gap={4} class="max-w-[250px]">
  <Field label="Required" required={'indicator'}>
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
