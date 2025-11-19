<script lang="ts">
  import DatePicker from '$lib/components/DatePicker/DatePicker.svelte';
  import Field from '$lib/components/Field/Field.svelte';
  import Stack from '$lib/components/Stack/Stack.svelte';
  import Text from '$lib/components/Text/Text.svelte';
  import { DateTime } from 'luxon';

  let selectedValue: DateTime | null = $state(null);
</script>

<Stack gap={4} class="max-w-[250px]">
  <Field label="Select a date">
    <DatePicker bind:value={selectedValue} />
  </Field>
  <Text>Selected date: {selectedValue == null ? 'null' : selectedValue.toISODate()}</Text>
</Stack>
