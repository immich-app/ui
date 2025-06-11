<script lang="ts">
	import InternalSelect from '$lib/internal/Select.svelte';
	import type { MultiSelectProps, SelectItem } from '$lib/types.js';

	type T = SelectItem;

	let { onChange, values = $bindable([]), ...restProps }: MultiSelectProps<T> = $props();

	const handleChange = (items: T[]) => {
		onChange?.(items);
	};
</script>

<InternalSelect multiple bind:values onChange={handleChange} {...restProps} />
