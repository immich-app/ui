<script lang="ts">
	import { cleanClass } from '$lib/utils.js';
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	type Props = {
		class?: string;
		children: Snippet;
		href: string;
		external?: boolean;
	} & HTMLAnchorAttributes;

	const { href, class: className, external, children, ...restProps }: Props = $props();
</script>

<a
	{href}
	class={cleanClass('underline', className)}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
	{...restProps}
>
	{@render children()}
</a>
