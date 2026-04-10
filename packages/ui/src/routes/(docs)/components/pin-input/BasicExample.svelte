<script lang="ts">
  import { Field, HelperText, PinInput, Stack, toastManager } from '@immich/ui';

  let value = $state('123');

  const onComplete = (v: string) => {
    toastManager.info(`Got PIN ${v}`);
    value = '';
  };
</script>

<Stack gap={4}>
  <Field label="Empty">
    <PinInput />
  </Field>
  <Field label="Value binding">
    <PinInput bind:value {onComplete} />
    <HelperText>Current value: {value}</HelperText>
  </Field>
  <Field label="Hidden digits">
    <PinInput password />
  </Field>
  <Field label="Disabled" disabled>
    <PinInput />
  </Field>
  <Field label="Shorter PIN">
    <PinInput length={4} />
  </Field>
  <Field label="Center">
    <PinInput class="items-center" />
  </Field>
</Stack>
