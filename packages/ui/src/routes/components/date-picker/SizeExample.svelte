<script lang="ts">
  import DatePicker from '$lib/components/DatePicker/DatePicker.svelte';
  import Field from '$lib/components/Field/Field.svelte';
  import Stack from '$lib/components/Stack/Stack.svelte';
</script>

<Stack gap={4} class="max-w-[250px]">
  <Field label="Tiny">
    <DatePicker size="tiny" />
  </Field>
  <Field label="Small">
    <DatePicker size="small" />
  </Field>
  <Field label="Medium">
    <DatePicker size="medium" />
  </Field>
  <Field label="Large">
    <DatePicker size="large" />
  </Field>
  <Field label="Giant">
    <DatePicker size="giant" />
  </Field>
</Stack>
