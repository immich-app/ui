<script lang="ts">
  import ComponentSizes from '$docs/components/ComponentSizes.svelte';
  import { Field, Stack, Textarea } from '@immich/ui';

  const lorem = `The quick brown fox jumps over the lazy dog`;
</script>

<Stack>
  <ComponentSizes>
    {#snippet child({ size, label })}
      <div>
        <Field {label} {size}>
          <Textarea value={lorem}></Textarea>
        </Field>
      </div>
    {/snippet}
  </ComponentSizes>
</Stack>
