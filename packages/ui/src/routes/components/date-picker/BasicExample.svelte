<script lang="ts">
  import { DatePicker, Field, Stack, Text } from '@immich/ui';
  import { DateTime } from 'luxon';

  let selectedDate: DateTime | undefined = $state(undefined);
</script>

<Stack gap={4} class="max-w-[250px]">
  <Field label="Select a date">
    <DatePicker bind:value={selectedDate} />
  </Field>
  <Text>Selected date: {selectedDate?.toISODate() ?? 'undefined'}</Text>
</Stack>
