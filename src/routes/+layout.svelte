<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import Footer from '$docs/components/Footer.svelte';
	import Navbar from '$docs/components/Navbar.svelte';
	import { componentGroups } from '$docs/constants.js';
	import { asComponentHref } from '$docs/utilities.js';
	import {
		AppShell,
		AppShellHeader,
		AppShellSidebar,
		initializeTheme,
		NavbarGroup,
		NavbarItem,
		theme,
		ThemeSwitcher,
	} from '@immich/ui';
	import { mdiHome, mdiHomeOutline } from '@mdi/js';
	import { MediaQuery } from 'svelte/reactivity';
	import '@immich/ui/theme/default.css';
	import '../app.css';
	import { page } from '$app/state';

	initializeTheme();

	let { children } = $props();

	const sidebar = new MediaQuery(`min-width: 850px`);
	let open = $derived(sidebar.current);

	beforeNavigate(() => {
		if (!sidebar.current) {
			open = false;
		}
	});
</script>

<AppShell>
	<AppShellHeader>
		<Navbar theme={theme.value} onToggleSidebar={() => (open = !open)}>
			<ThemeSwitcher size="medium" />
		</Navbar>
	</AppShellHeader>

	<AppShellSidebar bind:open>
		<div class="my-4 me-4">
			<NavbarItem
				title="Home"
				icon={mdiHomeOutline}
				activeIcon={mdiHome}
				href="/"
				isActive={() => page.url.pathname === '/'}
			/>
			{#each componentGroups as group}
				<NavbarGroup title={group.title} />
				{#each group.components as component}
					<NavbarItem
						href={asComponentHref(component.name)}
						title={component.name}
						icon={component.icon}
						activeIcon={component.activeIcon}
					/>
				{/each}
			{/each}
		</div>
	</AppShellSidebar>

	<section class="flex h-full flex-col">
		<div class="grow">
			{@render children?.()}
		</div>
		<Footer />
	</section>
</AppShell>
