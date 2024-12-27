<script lang="ts">
	import InternalSelect from '$lib/internal/Select.svelte';
	import type { SelectItem, SelectProps } from '$lib/types.js';

	type T = SelectItem;

	let { value = $bindable(), onChange, ...restProps }: SelectProps<T> = $props();

	const handleChange = (items: T[]) => {
		value = items[0] as T;
		onChange?.(value);
	};
</script>

<InternalSelect onChange={handleChange} {...restProps} />
