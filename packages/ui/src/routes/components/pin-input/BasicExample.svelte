<script lang="ts">
  import HelperText from '$lib/components/HelperText/HelperText.svelte';
  import { Field, PinInput, Stack, toastManager } from '@immich/ui';

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
  <Field label="Value binding" class="w-fit">
    <PinInput bind:value {onComplete} />
    <HelperText>Current value: {value}</HelperText>
  </Field>
  <Field label="Hidden digits" class="w-fit">
    <PinInput isVisible={false} />
  </Field>
  <Field label="Disabled" disabled class="w-fit">
    <PinInput />
  </Field>
  <Field label="Shorter PIN" class="w-fit">
    <PinInput length={4} />
  </Field>
</Stack>
