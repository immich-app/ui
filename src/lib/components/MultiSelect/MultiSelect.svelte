<script lang="ts">
	import InternalSelect from '$lib/internal/Select.svelte';
	import type { MultiSelectProps, SelectItem } from '$lib/types.js';

	type T = SelectItem;

	let { value = $bindable(), onChange, ...restProps }: MultiSelectProps<T> = $props();

	const handleChange = (items: T[]) => {
		value = items;
		onChange?.(value);
	};
</script>

<InternalSelect multiple onChange={handleChange} {...restProps} />
