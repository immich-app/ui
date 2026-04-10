<script lang="ts">
  import { Field, Select, Stack, type SelectOption } from '@immich/ui';

  const options: SelectOption[] = [
    { label: 'Angular', value: 'angular' },
    { label: 'React', value: 'react' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Vue', value: 'vue' },
  ];
</script>

<Stack>
  <Field label="Round">
    <Select {options} shape="round" placeholder="Round" />
  </Field>

  <Field label="Semi-Round">
    <Select {options} shape="semi-round" placeholder="Semi-Round" />
  </Field>

  <Field label="Rectangle">
    <Select {options} shape="rectangle" placeholder="Rectangle" />
  </Field>
</Stack>
