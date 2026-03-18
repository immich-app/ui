<script lang="ts">
  import { Field, PinInput, Stack } from '@immich/ui';
</script>

<Stack>
  <Field label="Round" class="w-fit">
    <PinInput value="123456" isVisible={false} shape="round" />
  </Field>
  <Field label="Semi-round" class="w-fit">
    <PinInput value="123456" isVisible={false} shape="semi-round" />
  </Field>
  <Field label="Rectangle" class="w-fit">
    <PinInput value="123456" isVisible={false} shape="rectangle" />
  </Field>
</Stack>
