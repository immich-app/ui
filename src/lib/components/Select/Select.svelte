<script lang="ts">
  import InternalSelect from '$lib/internal/Select.svelte';
  import type { SelectItem, SelectProps } from '$lib/types.js';

  type T = SelectItem;

  let { onChange, value = $bindable(), ...restProps }: SelectProps<T> = $props();

  let values = $derived(value ? [value] : []);

  const handleChange = (items: T[]) => {
    value = items[0];
    onChange?.(value);
  };
</script>

<InternalSelect bind:values onChange={handleChange} {...restProps} />
