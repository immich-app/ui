<script>
  import { Field, HelperText, Stack, Textarea } from '@immich/ui';
</script>

<Stack gap={4}>
  <Field label="Label">
    <Textarea placeholder="Type something here..." />
  </Field>
  <Field label="Label" description="This is the description">
    <Textarea />
  </Field>
  <Field label="Required" required="indicator">
    <Textarea />
  </Field>
  <Field label="Disabled" disabled>
    <Textarea />
  </Field>
  <Field label="Instance URL">
    <Textarea value="https://immich.app" />
  </Field>
  <Field label="Read-only" readOnly>
    <Textarea value="https://immich.app" />
  </Field>
  <Field label="Helper text">
    <Textarea />
    <HelperText>Note: this is helper text</HelperText>
  </Field>
  <Field label="Invalid" invalid>
    <Textarea />
    <HelperText color="danger">Must be valid</HelperText>
  </Field>
</Stack>
