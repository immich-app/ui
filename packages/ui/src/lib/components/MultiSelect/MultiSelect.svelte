<script lang="ts" generics="T extends string">
  import InternalSelect from '$lib/internal/Select.svelte';
  import type { MultiSelectProps, SelectItem } from '$lib/types.js';

  let { onChange, values = $bindable([]), ...restProps }: MultiSelectProps<T> = $props();

  const handleChange = (items: SelectItem<T>[]) => {
    onChange?.(items);
  };
</script>

<InternalSelect multiple bind:values onChange={handleChange} {...restProps} />
