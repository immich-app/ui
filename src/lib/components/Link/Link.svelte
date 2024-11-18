<script lang="ts">
	import { cleanClass } from '$lib/utils.js';
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	type Props = {
		class?: string;
		children: Snippet;
		href: string;
	} & HTMLAnchorAttributes;

	const { href, class: className, children, ...restProps }: Props = $props();
</script>

<a {href} class={cleanClass('underline', className)} {...restProps}>
	{@render children()}
</a>
