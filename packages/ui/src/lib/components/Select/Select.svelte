<script lang="ts" generics="T extends string">
  import InternalSelect from '$lib/internal/Select.svelte';
  import type { SelectItem, SelectProps } from '$lib/types.js';

  let { onChange, onItemChange, value = $bindable(), ...restProps }: SelectProps<T> = $props();

  let values = $derived(value ? [value] : []);

  const handleChange = (values: T[]) => {
    value = values[0];
    onChange?.(value);
  };

  const handleItemChange = (items: SelectItem<T>[]) => {
    onItemChange?.(items[0]);
  };
</script>

<InternalSelect bind:values onChange={handleChange} onItemChange={handleItemChange} {...restProps} />
