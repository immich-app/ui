<script lang="ts" generics="T extends string">
  import InternalSelect from '$lib/internal/Select.svelte';
  import type { MultiSelectProps, SelectItem } from '$lib/types.js';

  let { onChange, onItemChange, values = $bindable([]), ...restProps }: MultiSelectProps<T> = $props();

  const handleChange = (values: T[]) => {
    onChange?.(values);
  };

  const handleItemChange = (items: SelectItem<T>[]) => {
    onItemChange?.(items);
  };
</script>

<InternalSelect multiple bind:values onItemChange={handleItemChange} onChange={handleChange} {...restProps} />
