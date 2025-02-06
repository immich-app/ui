<script lang="ts">
	import Footer from '$docs/components/Footer.svelte';
	import Navbar from '$docs/components/Navbar.svelte';
	import { componentGroups } from '$docs/constants.js';
	import { asComponentHref } from '$docs/utilities.js';
	import {
		AppShell,
		AppShellHeader,
		AppShellSidebar,
		NavbarGroup,
		NavbarItem,
		theme,
		ThemeSwitcher,
	} from '@immich/ui';
	import { mdiHome } from '@mdi/js';
	import '../app.css';

	let { children } = $props();
</script>

<AppShell>
	<AppShellHeader>
		<Navbar theme={theme.value}>
			<ThemeSwitcher size="giant" />
		</Navbar>
	</AppShellHeader>

	<AppShellSidebar class="min-w-[250px]">
		<div class="mr-0 mt-4 md:mr-4">
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
		</div>
	</AppShellSidebar>

	<section class="flex h-full flex-col">
		<div class="grow">
			{@render children?.()}
		</div>
		<Footer />
	</section>
</AppShell>
