<script lang="ts">
  import Select from '$lib/components/Select/Select.svelte';
  import Stack from '$lib/components/Stack/Stack.svelte';
  import DatePicker from '$lib/internal/DatePicker.svelte';
  import type { SelectItem } from '$lib/types.js';

  let values: SelectItem[] = $state([
    { label: 'Svelte', value: 'svelte' },
    { label: 'React', value: 'react' },
    { label: 'Angular', value: 'angular' },
  ]);
</script>

<Stack gap={8} class="max-w-[500px]">
  <Stack gap={2}>
    <Select data={values} size="giant" />
    <Select data={values} size="large" />
    <Select data={values} size="medium" />
    <Select data={values} size="small" />
    <Select data={values} size="tiny" />
  </Stack>

  <Stack gap={2}>
    <DatePicker size="giant" />
    <DatePicker size="large" />
    <DatePicker size="medium" />
    <DatePicker size="small" />
    <DatePicker size="tiny" />
  </Stack>
</Stack>
