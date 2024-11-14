<script lang="ts">
	import { ThemeOption } from '$docs/constants.js';
	import { routes } from '$docs/routes.js';
	import { Icon } from '$lib/index.js';
	import { mdiCompare, mdiWeatherNight, mdiWeatherSunny } from '@mdi/js';

	const themes = [ThemeOption.Both, ThemeOption.Light, ThemeOption.Dark];
	const themeIcons: Record<ThemeOption, string> = {
		[ThemeOption.Both]: mdiCompare,
		[ThemeOption.Light]: mdiWeatherSunny,
		[ThemeOption.Dark]: mdiWeatherNight,
	};

	let themeOption = $state<ThemeOption>(ThemeOption.Both);
	let themeIcon = $derived(themeIcons[themeOption]);

	const { data } = $props();
	const route = $derived(routes.find((route) => route.link === data.link));
	const selectedThemes = $derived(themeOption === 'both' ? ['light', 'dark'] : [themeOption]);

	const handleClick = () => {
		const currentIndex = themes.indexOf(themeOption);
		themeOption = themes[(currentIndex + 1) % themes.length];
	};
</script>

<div class="flex min-h-screen flex-col overflow-y-auto">
	<!-- TODO replace with breadcrumb component -->
	<nav class="flex items-center justify-between gap-2 border-b border-gray-300 px-8 py-2">
		<a href="/" class="flex gap-2 text-4xl">
			<h1 class="text-2xl">@immich/ui</h1>
		</a>
		<div>
			<button onclick={handleClick}>
				<Icon path={themeIcon} size="24" class="cursor" />
			</button>
		</div>
	</nav>

	<nav class="flex justify-between border-b border-gray-300 px-8 py-2">
		<div class="flex items-center gap-2">
			<a href="/" class="underline">Home</a>
			<span>/</span>
			<span class="capitalize">{data.component}</span>
		</div>
	</nav>

	{#if route}
		<div class="grid grow grid-cols-1 {selectedThemes.length === 2 ? 'md:grid-cols-2' : ''}">
			{#each selectedThemes as theme}
				<div class="flex flex-col gap-4 {theme} h-full bg-light p-8">
					<h2 class="text-2xl capitalize text-dark">{theme}</h2>
					<route.component></route.component>
				</div>
			{/each}
		</div>
	{:else}
		<div class="p-8">
			<h2 class="text-xl">No examples found for {data.component}</h2>
		</div>
	{/if}
</div>
