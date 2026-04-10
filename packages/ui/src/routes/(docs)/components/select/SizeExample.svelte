<script lang="ts">
  import ComponentSizes from '$docs/components/ComponentSizes.svelte';
  import { Field, Select, Stack, type SelectOption } from '@immich/ui';

  const options: SelectOption[] = [
    { label: 'Angular', value: 'angular' },
    { label: 'React', value: 'react' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Vue', value: 'vue' },
  ];
</script>

<Stack>
  <ComponentSizes>
    {#snippet child({ size, label })}
      <Field {label} {size}>
        <Select {options} placeholder={label} />
      </Field>
    {/snippet}
  </ComponentSizes>
</Stack>
