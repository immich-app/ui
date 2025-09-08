<script lang="ts">
	import { cleanClass } from '$lib/utils.js';
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	type Props = {
		class?: string;
		children: Snippet;
		href: string;
		underline?: boolean;
		external?: boolean;
	} & HTMLAnchorAttributes;

	const {
		href,
		class: className,
		underline = true,
		external,
		children,
		...restProps
	}: Props = $props();
</script>

<a
	{href}
	draggable="false"
	class={cleanClass(underline && 'underline', className)}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
	{...restProps}
>
	{@render children()}
</a>
