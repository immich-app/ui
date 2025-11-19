<script lang="ts">
  import DatePicker from '$lib/components/DatePicker/DatePicker.svelte';
  import Field from '$lib/components/Field/Field.svelte';
  import Stack from '$lib/components/Stack/Stack.svelte';
</script>

<Stack gap={4} class="max-w-[250px]">
  <Field label="Round">
    <DatePicker shape="round" />
  </Field>
  <Field label="Semi-round">
    <DatePicker shape="semi-round" />
  </Field>
  <Field label="Rectangle">
    <DatePicker shape="rectangle" />
  </Field>
</Stack>
