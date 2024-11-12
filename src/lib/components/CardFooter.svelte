<script lang="ts">
	import { cleanClass } from '$lib/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div bind:this={ref} class={cleanClass('flex items-center p-6 pt-0', className)} {...restProps}>
	{@render children?.()}
</div>
