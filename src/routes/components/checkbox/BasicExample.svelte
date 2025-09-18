<script lang="ts">
  import { Checkbox, Field, Stack } from '@immich/ui';
</script>

<Stack>
  <Field label="Checkbox">
    <Checkbox checked />
  </Field>

  <Field label="Checkbox" description="This is the description">
    <Checkbox checked />
  </Field>

  <Field label="Disabled" disabled>
    <Checkbox checked />
  </Field>

  <Field label="Invalid" invalid>
    <Checkbox />
  </Field>
</Stack>
