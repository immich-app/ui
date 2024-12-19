<script lang="ts">
	import Navbar from '$docs/components/Navbar.svelte';
	import { Theme } from '$docs/constants.js';
	import AppShellHeader from '$lib/components/AppShell/AppShellHeader.svelte';
	import { theme } from '$lib/services/theme.svelte.js';
	import { AppShell, AppShellSidebar, Heading, IconButton, Link, Stack } from '@immich/ui';
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
			<Heading size="tiny">Layout</Heading>
			<Stack class="pl-4">
				<Link href="/examples/app-shell">AppShell</Link>
				<Link href="/examples/alert">Alert</Link>
				<Link href="/examples/card">Card</Link>
				<Link href="/examples/stack">Stack</Link>
			</Stack>
			<Heading size="tiny">Forms</Heading>
			<Stack class="pl-4">
				<Link href="/examples/button">Button</Link>
				<Link href="/examples/icon-button">IconButton</Link>
				<Link href="/examples/checkbox">Checkbox</Link>
				<Link href="/examples/close-button">CloseButton</Link>
				<Link href="/examples/field">Field</Link>
				<Link href="/examples/input">Input</Link>
				<Link href="/examples/loading-spinner">LoadingSpinner</Link>
				<Link href="/examples/password-input">PasswordInput</Link>
			</Stack>
			<Heading size="tiny">Text</Heading>
			<Stack class="pl-4">
				<Link href="/examples/heading">Heading</Link>
				<Link href="/examples/text">Text</Link>
				<Link href="/examples/link">Link</Link>
			</Stack>

			<Heading size="tiny">Immich</Heading>
			<Stack class="pl-4">
				<Link href="/examples/logo">Logo</Link>
				<Link href="/examples/supporter-badge">SupporterBadge</Link>
			</Stack>
		</Stack>
	</AppShellSidebar>

	<div class="h-full">
		{@render children()}
	</div>
</AppShell>
