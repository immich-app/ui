<script lang="ts">
  import { Field, HelperText, NumberInput, Stack } from '@immich/ui';

  let value = $state(100);
  let favorite = $state(42);
</script>

<Stack gap={4}>
  <Field label="Number">
    <NumberInput bind:value />
  </Field>
  <Field label="Favorite number" description="Type your favorite number">
    <NumberInput bind:value={favorite} />
    <HelperText>You typed {favorite}</HelperText>
  </Field>
</Stack>
