<script lang="ts">
  import { Field, PinInput, Stack } from '@immich/ui';
</script>

<Stack>
  <Field label="Round">
    <PinInput value="123456" password shape="round" />
  </Field>
  <Field label="Semi-round">
    <PinInput value="123456" password shape="semi-round" />
  </Field>
  <Field label="Rectangle">
    <PinInput value="123456" password shape="rectangle" />
  </Field>
</Stack>
