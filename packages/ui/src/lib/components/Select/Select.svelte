<script lang="ts" generics="T extends string">
  import InternalSelect from '$lib/internal/Select.svelte';
  import type { SelectItem, SelectProps } from '$lib/types.js';

  let { onChange, value = $bindable(), ...restProps }: SelectProps<T> = $props();

  let values = $derived(value ? [value] : []);

  const handleChange = (items: SelectItem<T>[]) => {
    value = items[0];
    onChange?.(value);
  };
</script>

<InternalSelect bind:values onChange={handleChange} {...restProps} />
