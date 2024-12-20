<script lang="ts">
	import Navbar from '$docs/components/Navbar.svelte';
	import { componentGroups, Theme } from '$docs/constants.js';
	import { asComponentHref } from '$docs/utilities.js';
	import { theme } from '$lib/services/theme.svelte.js';
	import {
		AppShell,
		AppShellHeader,
		AppShellSidebar,
		Heading,
		IconButton,
		Link,
		Stack,
	} from '@immich/ui';
	import { mdiWeatherNight, mdiWeatherSunny } from '@mdi/js';
	import '../app.css';
	let { children } = $props();

	const handleToggleTheme = () =>
		(theme.value = theme.value === Theme.Dark ? Theme.Light : Theme.Dark);

	const themeIcon = $derived(theme.value === Theme.Light ? mdiWeatherSunny : mdiWeatherNight);
</script>

<AppShell class="{theme.value} bg-light text-dark">
	<AppShellHeader>
		<Navbar theme={theme.value}>
			<IconButton
				size="large"
				shape="round"
				color="primary"
				variant="ghost"
				icon={themeIcon}
				onclick={handleToggleTheme}
			/>
		</Navbar>
	</AppShellHeader>

	<AppShellSidebar class="p-4">
		<Stack class="min-w-[200px]">
			{#each componentGroups as group}
				<Heading size="tiny">{group.name}</Heading>
				<Stack class="pl-4">
					{#each group.components as component}
						<Link href={asComponentHref(component.name)}>{component.name}</Link>
					{/each}
				</Stack>
			{/each}
		</Stack>
	</AppShellSidebar>

	<div class="h-full">
		{@render children()}
	</div>
</AppShell>
