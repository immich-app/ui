<script lang="ts">
  import ComponentTextColors from '$docs/components/ComponentTextColors.svelte';
  import { Field, Input, Stack } from '@immich/ui';
</script>

<Stack gap={4}>
  <ComponentTextColors>
    {#snippet child({ color, label })}
      <div>
        <Field {label} {color}>
          <Input placeholder="placeholder" />
        </Field>
      </div>
    {/snippet}
  </ComponentTextColors>
</Stack>
