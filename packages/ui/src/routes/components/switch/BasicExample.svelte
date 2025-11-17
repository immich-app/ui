<script>
  import { Field, Stack, Switch } from '@immich/ui';
</script>

<Stack>
  <Switch />
  <Switch checked />
  <Field disabled>
    <Switch />
  </Field>
  <Field label="Required" requiredIndicator>
    <Switch />
  </Field>
</Stack>
