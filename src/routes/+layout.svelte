<script lang="ts">
	import { page } from '$app/state';
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
	const isActive = (path: string) => path === page.url.pathname;

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
		<NavbarItem active={isActive('/')} title="Home" icon={mdiHome} href="/" />
		{#each componentGroups as group}
			<NavbarGroup title={group.title} />
			{#each group.components as component}
				{@const href = asComponentHref(component.name)}
				<NavbarItem active={isActive(href)} title={component.name} icon={component.icon} {href} />
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
