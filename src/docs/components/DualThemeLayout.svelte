<script lang="ts">
	import { DisplayOption, Theme } from '$docs/constants.js';
	import { Icon } from '$lib/index.js';
	import { VStack } from '@immich/ui';
	import { mdiCompare, mdiWeatherNight, mdiWeatherSunny } from '@mdi/js';
	import type { Snippet } from 'svelte';

	type Props = {
		name: string;
		component: Snippet<[{ theme: Theme }]>;
	};

	const { name, component }: Props = $props();

	const themes = [DisplayOption.Both, DisplayOption.Light, DisplayOption.Dark];
	const themeIcons: Record<DisplayOption, string> = {
		[DisplayOption.Both]: mdiCompare,
		[DisplayOption.Light]: mdiWeatherSunny,
		[DisplayOption.Dark]: mdiWeatherNight,
	};

	let displayOption = $state<DisplayOption>(DisplayOption.Both);
	let themeIcon = $derived(themeIcons[displayOption]);

	const displayThemes = $derived<Theme[]>(
		displayOption === 'both'
			? [Theme.Light, Theme.Dark]
			: displayOption === DisplayOption.Dark
				? [Theme.Dark]
				: [Theme.Light],
	);

	const handleClick = () => {
		const currentIndex = themes.indexOf(displayOption);
		displayOption = themes[(currentIndex + 1) % themes.length];
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
				<Icon icon={themeIcon} size="24" class="cursor" />
			</button>
		</div>
	</nav>

	<nav class="flex justify-between border-b border-gray-300 px-8 py-2">
		<div class="flex items-center gap-2">
			<a href="/" class="underline">Home</a>
			<span>/</span>
			<span class="capitalize">{name}</span>
		</div>
	</nav>

	<div class="grid grow grid-cols-1 {displayThemes.length === 2 ? 'md:grid-cols-2' : ''}">
		{#each displayThemes as theme}
			<div class="flex flex-col gap-4 {theme} h-full bg-light p-8">
				<h2 class="text-2xl capitalize text-dark">{theme}</h2>
				<VStack gap={4}>
					{@render component({ theme })}
				</VStack>
			</div>
		{/each}
	</div>
</div>
