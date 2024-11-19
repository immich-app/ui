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
				<CardTitle>Stack (row)</CardTitle>
			</CardHeader>
			<CardBody>
				<Stack direction="row">
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
					<DecorativeBlock width="full" height="medium" />
					<DecorativeBlock width="full" height="small" />
					<DecorativeBlock width="full" height="large" />
				</HStack>
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>VStack</CardTitle>
			</CardHeader>
			<CardBody>
				<VStack>
					<DecorativeBlock width="medium" height="large" />
					<DecorativeBlock width="small" height="large" />
					<DecorativeBlock width="large" height="large" />
				</VStack>
			</CardBody>
		</Card>
	{/snippet}
</DualThemeLayout>
