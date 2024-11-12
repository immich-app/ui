<script lang="ts">
	import { routes } from '$docs/routes.js';

	const { data } = $props();
	const route = $derived(routes.find((route) => route.link === data.link));
</script>

<div class="flex min-h-screen flex-col gap-4 bg-gray-200 p-8">
	<!-- TODO replace with breadcrumb component -->
	<div class="flex gap-1 rounded-lg bg-light p-2 text-dark">
		<a href="/" class="flex gap-2 underline">Home</a>
		<span>></span>
		<!-- <span>Components</span> -->
		<!-- <span>></span> -->
		<span class="capitalize">{data.component}</span>
	</div>

	<div class="flex gap-2">
		{#if route}
			{#each ['light', 'dark'] as theme}
				<div class="flex w-1/2 flex-col {theme} gap-2">
					<route.component></route.component>
				</div>
			{/each}
		{:else}
			<h2 class="text-xl">No examples found for {data.component}</h2>
		{/if}
	</div>
</div>
