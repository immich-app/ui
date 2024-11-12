<script lang="ts">
	import { routes } from '$docs/routes.js';
</script>

<section class="m-4 h-screen overflow-y-scroll p-4">
	<h1 class="text-4xl">@immich/ui</h1>

	<hr class="my-4" />

	<div class="flex flex-col gap-2">
		{#each routes as route}
			<a href={route.link}>
				<h3 class="text-xl underline">{route.name}</h3>
			</a>
		{/each}
	</div>
</section>
