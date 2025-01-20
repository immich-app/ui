<script lang="ts">
	import Footer from '$docs/components/Footer.svelte';
	import Navbar from '$docs/components/Navbar.svelte';
	import { componentGroups } from '$docs/constants.js';
	import { asComponentHref } from '$docs/utilities.js';
	import {
		AppShell,
		AppShellHeader,
		AppShellSidebar,
		IconButton,
		NavbarGroup,
		NavbarItem,
		syncToDom,
		theme,
		Theme,
	} from '@immich/ui';
	import { mdiHome, mdiWeatherNight, mdiWeatherSunny } from '@mdi/js';
	import '../app.css';

	let { children } = $props();

	const handleToggleTheme = () =>
		(theme.value = theme.value === Theme.Dark ? Theme.Light : Theme.Dark);

	const themeIcon = $derived(theme.value === Theme.Light ? mdiWeatherSunny : mdiWeatherNight);

	$effect(() => {
		syncToDom();
	});
</script>

<AppShell>
	<AppShellHeader>
		<Navbar theme={theme.value}>
			<IconButton
				size="giant"
				shape="round"
				color="primary"
				variant="ghost"
				icon={themeIcon}
				onclick={handleToggleTheme}
			/>
		</Navbar>
	</AppShellHeader>

	<AppShellSidebar class="min-w-[225px]">
		<NavbarItem title="Home" icon={mdiHome} href="/" />
		{#each componentGroups as group}
			<NavbarGroup title={group.title} />
			{#each group.components as component}
				<NavbarItem
					href={asComponentHref(component.name)}
					title={component.name}
					icon={component.icon}
				/>
			{/each}
		{/each}
	</AppShellSidebar>

	<section class="flex h-full flex-col">
		<div class="grow">
			{@render children?.()}
		</div>
		<Footer />
	</section>
</AppShell>
