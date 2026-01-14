<script lang="ts" generics="T extends string">
  import InternalSelect from '$lib/internal/Select.svelte';
  import type { SelectOption, SelectProps } from '$lib/types.js';

  let { onChange, onSelect, value = $bindable(), ...restProps }: SelectProps<T> = $props();

  let values = $derived(value === null || value === undefined ? [] : [value]);

  const handleChange = (values: T[]) => {
    value = values[0];
    onChange?.(value);
  };

  const handleSelect = (items: SelectOption<T>[]) => {
    onSelect?.(items[0]);
  };
</script>

<InternalSelect bind:values onChange={handleChange} onSelect={handleSelect} {...restProps} />
