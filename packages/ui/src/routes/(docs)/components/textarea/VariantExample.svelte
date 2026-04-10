<script lang="ts">
  import { Field, Stack, Textarea } from '@immich/ui';

  const lorem = `The quick brown fox jumps over the lazy dog`;
</script>

<Stack>
  <div>
    <Field label="Ghost">
      <Textarea value={lorem} variant="ghost" />
    </Field>

    <Field label="Ghost invalid" invalid>
      <Textarea value={lorem} variant="ghost" />
    </Field>

    <Field label="Ghost readonly" readOnly>
      <Textarea value={lorem} variant="ghost" />
    </Field>
  </div>
</Stack>
