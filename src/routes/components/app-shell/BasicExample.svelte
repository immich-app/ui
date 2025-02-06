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
	<div class="border">
		<AppShell class="h-[400px]">
			<AppShellHeader>
				<div class="p-4">
					<Heading tag="p" size="tiny">Header</Heading>
				</div>
			</AppShellHeader>

			<div class="p-4">
				<Heading tag="p" size="tiny">Content</Heading>
			</div>
		</AppShell>
	</div>

	<div class="border">
		<AppShell class="h-[400px]">
			<AppShellHeader>
				<div class="p-4">
					<Heading tag="p" size="tiny">Header</Heading>
				</div>
			</AppShellHeader>

			<AppShellSidebar>
				<div class="p-4">
					<Heading tag="p" size="tiny">Sidebar</Heading>
				</div>
			</AppShellSidebar>

			<div class="p-4">
				<Heading tag="p" size="tiny">Content</Heading>
			</div>
		</AppShell>
	</div>

	<div class="border">
		<AppShell class="h-[400px]">
			<AppShellHeader>
				<div class="p-4">
					<Heading tag="p" size="tiny">Header</Heading>
				</div>
			</AppShellHeader>

			<AppShellSidebar noBorder class="pt-2">
				<Stack>
					<NavbarItem icon={mdiHome} title="Home" href="/" active />
					<NavbarItem icon={mdiHome} title="Item 1" href="#" />
					<NavbarItem icon={mdiHome} title="Item 2" href="#" />
					<NavbarItem icon={mdiHome} title="Item 3" href="#" />
				</Stack>
			</AppShellSidebar>

			<div class="p-4">
				<Heading tag="p" size="tiny">Content</Heading>
			</div>
		</AppShell>
	</div>
</Stack>
