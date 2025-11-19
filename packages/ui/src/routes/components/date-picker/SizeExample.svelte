<script lang="ts">
  import ComponentSizes from '$docs/components/ComponentSizes.svelte';
  import DatePicker from '$lib/components/DatePicker/DatePicker.svelte';
  import Field from '$lib/components/Field/Field.svelte';
  import Stack from '$lib/components/Stack/Stack.svelte';
</script>

<Stack gap={4} class="max-w-[250px]">
  <ComponentSizes>
    {#snippet child({ size, label })}
      <Field {label}>
        <DatePicker {size} />
      </Field>
    {/snippet}
  </ComponentSizes>
</Stack>
