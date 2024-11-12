<script lang="ts">
	import { cleanClass } from '$lib/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = WithElementRef<HTMLAttributes<HTMLDivElement>>;

	let { ref = $bindable(null), class: className, children, ...restProps }: Props = $props();
</script>

<div
	bind:this={ref}
	class={cleanClass('flex flex-col space-y-1.5 rounded-t-lg p-6 pb-0', className)}
	{...restProps}
>
	{@render children?.()}
</div>
