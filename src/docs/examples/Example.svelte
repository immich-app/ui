<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	const { children }: Props = $props();
</script>

<h1 class="text-xl">Examples</h1>
<hr class="my-2" />

{@render children()}
