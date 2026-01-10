<script lang="ts">
  import ComponentSizes from '$docs/components/ComponentSizes.svelte';
  import { Field, Input, Stack } from '@immich/ui';
</script>

<Stack gap={4}>
  <ComponentSizes>
    {#snippet child({ size, label })}
      <div>
        <Field {label} {size}>
          <Input placeholder="placeholder" />
        </Field>
      </div>
    {/snippet}
  </ComponentSizes>
</Stack>
