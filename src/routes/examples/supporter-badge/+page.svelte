<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import { sizes } from '$docs/constants.js';
	import Heading from '$lib/components/Heading/Heading.svelte';
	import { Card, CardBody, CardHeader, CardTitle, Logo, SupporterBadge, VStack } from '@immich/ui';
</script>

<DualThemeLayout name="Link">
	{#snippet component()}
		<Card>
			<CardHeader>
				<CardTitle>Effect</CardTitle>
			</CardHeader>
			<CardBody>
				<VStack class="w-[200px]">
					<Heading size="tiny">On Hover</Heading>
					<SupporterBadge />
					<Heading size="tiny">Always</Heading>
					<SupporterBadge effect="always" />
				</VStack>
			</CardBody>
		</Card>
		<Card>
			<CardHeader>
				<CardTitle>Sizes</CardTitle>
			</CardHeader>
			<CardBody>
				<VStack>
					{#each sizes as size}
						<VStack class="w-[250px]">
							<Heading size="tiny" class="capitalize">{size}</Heading>
							<SupporterBadge {size} effect="always" />
						</VStack>
					{/each}
				</VStack>
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Custom</CardTitle>
			</CardHeader>
			<CardBody>
				<VStack>
					<VStack class="w-[250px]">
						<SupporterBadge effect="always" text="Buy Immich" />
					</VStack>

					<VStack>
						<Heading size="tiny">Title</Heading>
						<SupporterBadge effect="always">
							<Logo size="large" variant="icon" />
							<Heading size="large" color="primary">Purchase Immich</Heading>
						</SupporterBadge>
					</VStack>
				</VStack>
			</CardBody>
		</Card>
	{/snippet}
</DualThemeLayout>
