<script lang="ts">
	import Button from '$lib/internal/Button.svelte';
	import {
		AppShell,
		AppShellHeader,
		AppShellSidebar,
		Heading,
		NavbarItem,
		Stack,
	} from '@immich/ui';
	import { mdiHome } from '@mdi/js';

	let open = $state(true);
</script>

<Stack>
	<div class="border">
		<AppShell class="h-[400px]">
			<AppShellHeader>
				<div class="p-4">
					<Heading size="tiny">Header</Heading>
				</div>
			</AppShellHeader>

			<div class="p-4">
				<Heading size="tiny">Content</Heading>
			</div>
		</AppShell>
	</div>

	<div class="border">
		<AppShell class="h-[400px]">
			<AppShellHeader>
				<div class="p-4">
					<Heading size="tiny">Header</Heading>
				</div>
			</AppShellHeader>

			<AppShellSidebar>
				<div class="p-4">
					<Heading size="tiny">Sidebar</Heading>
				</div>
			</AppShellSidebar>

			<div class="p-4">
				<Heading size="tiny">Content</Heading>
			</div>
		</AppShell>
	</div>

	<div class="border">
		<AppShell class="h-[400px]">
			<AppShellHeader>
				<div class="p-4">
					<Heading size="tiny">Header</Heading>
				</div>
			</AppShellHeader>

			<AppShellSidebar class="pt-2" bind:open>
				<Stack>
					<NavbarItem icon={mdiHome} title="Home" href="/" active />
					<NavbarItem icon={mdiHome} title="Item 1" href="#" />
					<NavbarItem icon={mdiHome} title="Item 2" href="#" />
					<NavbarItem icon={mdiHome} title="Item 3" href="#" />
				</Stack>
			</AppShellSidebar>

			<div class="p-4">
				<Button onclick={() => (open = !open)}>Toggle Sidebar</Button>
			</div>
		</AppShell>
	</div>
</Stack>
