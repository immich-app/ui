<script lang="ts">
	import { cleanClass } from '$lib/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = WithElementRef<HTMLAttributes<HTMLDivElement>>;

	let { ref = $bindable(null), class: className, children, ...restProps }: Props = $props();
</script>

<div
	bind:this={ref}
	class={cleanClass(
		'rounded-2xl border border-gray-300 bg-light text-dark shadow-sm dark:border-gray-600',
		className,
	)}
	{...restProps}
>
	{@render children?.()}
</div>
