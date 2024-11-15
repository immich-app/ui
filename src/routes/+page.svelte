<script lang="ts">
	import { routes } from '$docs/constants.js';
</script>

<main>
	<nav class="border-b border-gray-300 px-8 py-4">
		<h1 class="text-4xl">@immich/ui</h1>
	</nav>

	<div class="flex flex-col gap-2 px-8 py-4">
		{#each routes as route}
			<a href={route.link}>
				<h3 class="text-xl underline">{route.name}</h3>
			</a>
		{/each}
	</div>
</main>
