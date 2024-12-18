<script lang="ts">
	import Examples from '$docs/components/Examples.svelte';
	import Navbar from '$docs/components/Navbar.svelte';
	import { DisplayOption, Theme, type ExampleItem } from '$docs/constants.js';
	import { Icon, Stack } from '@immich/ui';
	import { mdiCompare, mdiWeatherNight, mdiWeatherSunny } from '@mdi/js';

	type Props = {
		name: string;
		examples: ExampleItem[];
	};

	const { name, examples }: Props = $props();

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

	const navbarTheme = $derived(displayOption === DisplayOption.Light ? Theme.Light : Theme.Dark);

	const handleClick = () => {
		const currentIndex = themes.indexOf(displayOption);
		displayOption = themes[(currentIndex + 1) % themes.length];
	};
</script>

<div class="flex min-h-screen flex-col overflow-y-auto">
	<Navbar theme={navbarTheme}>
		<div>
			<button onclick={handleClick}>
				<Icon icon={themeIcon} size="24" class="cursor" />
			</button>
		</div>
	</Navbar>

	<!-- TODO replace with breadcrumb component -->
	<nav
		class="{navbarTheme} flex justify-between border-b border-gray-300 bg-light px-8 py-2 text-dark"
	>
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
				<Stack gap={4}>
					<Examples {theme} {examples} />
				</Stack>
			</div>
		{/each}
	</div>
</div>
