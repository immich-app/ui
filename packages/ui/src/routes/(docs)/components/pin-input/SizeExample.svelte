<script lang="ts">
  import ComponentSizes from '$docs/components/ComponentSizes.svelte';
  import { Field, PinInput, Stack } from '@immich/ui';
</script>

<Stack>
  <ComponentSizes>
    {#snippet child({ size, label })}
      <div>
        <Field {label} {size}>
          <PinInput value="123" />
        </Field>
      </div>
    {/snippet}
  </ComponentSizes>
</Stack>
