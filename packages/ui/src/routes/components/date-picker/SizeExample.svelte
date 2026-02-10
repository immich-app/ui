<script lang="ts">
  import ComponentSizes from '$docs/components/ComponentSizes.svelte';
  import { DatePicker, Field, Stack } from '@immich/ui';
</script>

<Stack gap={4} class="max-w-[250px]">
  <ComponentSizes>
    {#snippet child({ size, label })}
      <Field {size} {label}>
        <DatePicker locale={navigator.language} />
      </Field>
    {/snippet}
  </ComponentSizes>
</Stack>
