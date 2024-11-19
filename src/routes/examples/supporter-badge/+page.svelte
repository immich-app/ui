<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import { sizes } from '$docs/constants.js';
	import Heading from '$lib/components/Heading/Heading.svelte';
	import { Card, CardBody, CardHeader, CardTitle, Logo, SupporterBadge, Stack } from '@immich/ui';
</script>

<DualThemeLayout name="Link">
	{#snippet component()}
		<Card>
			<CardHeader>
				<CardTitle>Effect</CardTitle>
			</CardHeader>
			<CardBody>
				<Stack class="w-[200px]">
					<Heading size="tiny">On Hover</Heading>
					<SupporterBadge />
					<Heading size="tiny">Always</Heading>
					<SupporterBadge effect="always" />
				</Stack>
			</CardBody>
		</Card>
		<Card>
			<CardHeader>
				<CardTitle>Sizes</CardTitle>
			</CardHeader>
			<CardBody>
				<Stack>
					{#each sizes as size}
						<Stack class="w-[250px]">
							<Heading size="tiny" class="capitalize">{size}</Heading>
							<SupporterBadge {size} effect="always" />
						</Stack>
					{/each}
				</Stack>
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Custom</CardTitle>
			</CardHeader>
			<CardBody>
				<Stack>
					<Stack class="w-[250px]">
						<SupporterBadge effect="always" text="Buy Immich" />
					</Stack>

					<Stack>
						<Heading size="tiny">Title</Heading>
						<SupporterBadge effect="always">
							<Logo size="large" variant="icon" />
							<Heading size="large" color="primary">Purchase Immich</Heading>
						</SupporterBadge>
					</Stack>
				</Stack>
			</CardBody>
		</Card>
	{/snippet}
</DualThemeLayout>
