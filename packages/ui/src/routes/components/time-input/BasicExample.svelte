<script lang="ts">
  import TimeInput from '$lib/components/TimeInput/TimeInput.svelte';
  import { Field, IconButton, Stack } from '@immich/ui';
  import { Time } from '@internationalized/date';
  import { mdiClockOutline, mdiClose } from '@mdi/js';
  import type { TimeValue } from 'bits-ui';

  let value1 = $state(new Time(12, 34, 56, 0));
  let value2 = $state<TimeValue>();
  let value3 = $state<TimeValue>();

  const now = () => {
    const date = new Date();
    return new Time(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
  };
</script>

<Stack gap={4}>
  <Field label="Time">
    <TimeInput bind:value={value1} />
  </Field>
  <Field label="Leading icon">
    <TimeInput leadingIcon={mdiClockOutline} />
  </Field>
  <Field label="Leading icon button">
    <TimeInput bind:value={value2}>
      {#snippet leadingIcon()}
        <IconButton
          icon={mdiClockOutline}
          shape="round"
          variant="ghost"
          color="secondary"
          aria-label="Now"
          onclick={() => (value2 = now())}
        />
      {/snippet}
    </TimeInput>
  </Field>
  <Field label="Trailing icon">
    <TimeInput trailingIcon={mdiClockOutline} />
  </Field>
  <Field label="Trailing icon button">
    <TimeInput bind:value={value3}>
      {#snippet trailingIcon()}
        <IconButton
          icon={mdiClose}
          shape="round"
          variant="ghost"
          color="secondary"
          aria-label="Reset"
          onclick={() => (value3 = undefined)}
        />
      {/snippet}
    </TimeInput>
  </Field>
</Stack>
