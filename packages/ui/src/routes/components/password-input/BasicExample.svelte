<script lang="ts">
  import { Field, PasswordInput, Stack } from '@immich/ui';

  let value = $state('super-secret-password');
</script>

<Stack gap={4}>
  <Field label="Empty">
    <PasswordInput />
  </Field>
  <Field label="Password">
    <PasswordInput bind:value />
  </Field>
</Stack>
