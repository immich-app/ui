<script lang="ts">
  import ComponentColors from '$docs/components/ComponentColors.svelte';
  import { Field, Input, Stack } from '@immich/ui';
</script>

<Stack gap={4}>
  <ComponentColors>
    {#snippet child({ color, label })}
      <div>
        <Field {label} {color}>
          <Input placeholder="placeholder" />
        </Field>
      </div>
    {/snippet}
  </ComponentColors>
</Stack>
