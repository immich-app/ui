<script lang="ts">
	import { cleanClass } from '$lib/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = WithElementRef<HTMLAttributes<HTMLDivElement>>;

	let { ref = $bindable(null), class: className, children, ...restProps }: Props = $props();
</script>

<div
	bind:this={ref}
	class={cleanClass('rounded-lg border bg-light text-dark shadow-lg', className)}
	{...restProps}
>
	{@render children?.()}
</div>
