<script lang="ts">
  import { DatePicker, Field, Stack } from '@immich/ui';
</script>

<Stack gap={4} class="max-w-[250px]">
  <Field label="Round">
    <DatePicker shape="round" locale={navigator.language} />
  </Field>
  <Field label="Semi-round">
    <DatePicker shape="semi-round" locale={navigator.language} />
  </Field>
  <Field label="Rectangle">
    <DatePicker shape="rectangle" locale={navigator.language} />
  </Field>
</Stack>
