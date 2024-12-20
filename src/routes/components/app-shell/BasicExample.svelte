<script lang="ts">
	import {
		AppShell,
		AppShellHeader,
		AppShellSidebar,
		Heading,
		NavbarItem,
		Stack,
	} from '@immich/ui';
	import { mdiHome } from '@mdi/js';
</script>

<Stack>
	<div class="border border-gray-300 dark:border-gray-700">
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

	<div class="border border-gray-300 dark:border-gray-700">
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

	<div class="border border-gray-300 dark:border-gray-700">
		<AppShell class="h-[400px]">
			<AppShellHeader>
				<div class="p-4">
					<Heading size="tiny">Header</Heading>
				</div>
			</AppShellHeader>

			<AppShellSidebar noBorder class="pt-2">
				<Stack>
					<NavbarItem icon={mdiHome} title="Home" href="/" active />
					<NavbarItem icon={mdiHome} title="Home" href="/" />
					<NavbarItem icon={mdiHome} title="Home" href="/" />
					<NavbarItem icon={mdiHome} title="Home" href="/" />
				</Stack>
			</AppShellSidebar>

			<div class="p-4">
				<Heading size="tiny">Content</Heading>
			</div>
		</AppShell>
	</div>
</Stack>
