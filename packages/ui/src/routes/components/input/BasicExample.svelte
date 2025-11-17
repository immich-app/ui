<script>
  import { Field, HelperText, Input, Stack } from '@immich/ui';
</script>

<Stack gap={4}>
  <Field label="Label">
    <Input placeholder="label" />
  </Field>
  <Field label="Label" description="This is the description">
    <Input placeholder="label" />
  </Field>
  <Field label="Disabled" disabled>
    <Input placeholder="label" />
  </Field>
  <Field label="Required" requiredIndicator>
    <Input placeholder="label" />
  </Field>
  <Field label="Instance URL">
    <Input placeholder="label" value="https://immich.app" />
  </Field>
  <Field label="Read-only" readOnly>
    <Input placeholder="label" value="https://immich.app" />
  </Field>
  <Field label="Helper text">
    <Input placeholder="label" />
    <HelperText>Note: this is helper text</HelperText>
  </Field>
  <Field label="Invalid" invalid>
    <Input placeholder="label" />
    <HelperText color="danger">Must be valid</HelperText>
  </Field>
</Stack>
