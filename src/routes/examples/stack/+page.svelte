<script lang="ts">
	import DecorativeBlock from '$docs/components/DecorativeBlock.svelte';
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import { Card, CardBody, CardHeader, CardTitle, HStack, Stack, VStack } from '@immich/ui';
</script>

<DualThemeLayout name="Stack">
	{#snippet component()}
		<Card>
			<CardHeader>
				<CardTitle>Stack</CardTitle>
			</CardHeader>
			<CardBody>
				<Stack>
					<DecorativeBlock />
					<DecorativeBlock />
					<DecorativeBlock />
				</Stack>
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>HStack</CardTitle>
			</CardHeader>
			<CardBody>
				<HStack>
					<DecorativeBlock />
					<DecorativeBlock />
					<DecorativeBlock />
				</HStack>
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>VStack</CardTitle>
			</CardHeader>
			<CardBody>
				<VStack>
					<DecorativeBlock />
					<DecorativeBlock />
					<DecorativeBlock />
				</VStack>
			</CardBody>
		</Card>
	{/snippet}
</DualThemeLayout>
