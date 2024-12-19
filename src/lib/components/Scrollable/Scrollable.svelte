<script lang="ts">
	import { cleanClass } from '$lib/utils.js';
	import type { Snippet } from 'svelte';

	type Props = {
		class?: string;
		children?: Snippet;
	};

	const { class: className, children }: Props = $props();
</script>

<div class={cleanClass('immich-scrollbar overflow-y-auto', className)}>
	{@render children?.()}
</div>

<style>
	/* width */
	.immich-scrollbar::-webkit-scrollbar {
		width: 8px;
	}

	/* Track */
	.immich-scrollbar::-webkit-scrollbar-track {
		background: #f1f1f1;
		border-radius: 16px;
	}

	/* Handle */
	.immich-scrollbar::-webkit-scrollbar-thumb {
		background: rgba(85, 86, 87, 0.408);
		border-radius: 16px;
	}

	/* Handle on hover */
	.immich-scrollbar::-webkit-scrollbar-thumb:hover {
		background: #4250afad;
		border-radius: 16px;
	}
</style>
