<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import { Card, CardBody, CardHeader, CardTitle, CloseButton, VStack } from '@immich/ui';
</script>

<DualThemeLayout name="CloseButton">
	{#snippet component()}
		<Card>
			<CardHeader>
				<CardTitle>Basic</CardTitle>
			</CardHeader>
			<CardBody>
				<VStack>
					<CloseButton />
				</VStack>
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Filled</CardTitle>
			</CardHeader>
			<CardBody>
				<VStack>
					<CloseButton variant="filled" />
				</VStack>
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Outline</CardTitle>
			</CardHeader>
			<CardBody>
				<VStack>
					<CloseButton variant="outline" />
				</VStack>
			</CardBody>
		</Card>
	{/snippet}
</DualThemeLayout>
