<script lang="ts">
	import { Logo } from '@immich/ui';
	import type { Snippet } from 'svelte';
	import { Theme } from '$docs/constants.js';

	type Props = {
		theme?: Theme;
		children?: Snippet;
	};

	const { children, theme = Theme.Dark }: Props = $props();
</script>

<nav class="{theme} flex items-center justify-between gap-2 p-2">
	<a href="/" class="flex gap-2 text-4xl">
		<Logo variant="inline" {theme} />
	</a>
	{@render children?.()}
</nav>
