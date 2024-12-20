<script lang="ts">
	import DecorativeBlock from '$docs/components/DecorativeBlock.svelte';
	import { AppShell, AppShellHeader, AppShellSidebar, Heading, Stack } from '@immich/ui';
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

			<AppShellSidebar>
				<div class="p-4">
					<Heading size="tiny">Sidebar Overflow</Heading>
					<Stack>
						<DecorativeBlock />
						<DecorativeBlock />
						<DecorativeBlock />
						<DecorativeBlock />
						<DecorativeBlock />
						<DecorativeBlock />
					</Stack>
				</div>
			</AppShellSidebar>

			<div class="p-4">
				<Heading size="tiny">Content Overflow</Heading>
				<Stack>
					<DecorativeBlock />
					<DecorativeBlock />
					<DecorativeBlock />
					<DecorativeBlock />
					<DecorativeBlock />
					<DecorativeBlock />
				</Stack>
			</div>
		</AppShell>
	</div>
</Stack>
