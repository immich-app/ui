<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import { Card, CardBody, CardHeader, CardTitle, CloseButton, Stack } from '@immich/ui';
</script>

<DualThemeLayout name="CloseButton">
	{#snippet component()}
		<Card>
			<CardHeader>
				<CardTitle>Basic</CardTitle>
			</CardHeader>
			<CardBody>
				<Stack>
					<CloseButton />
				</Stack>
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Filled</CardTitle>
			</CardHeader>
			<CardBody>
				<Stack>
					<CloseButton variant="filled" />
				</Stack>
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Outline</CardTitle>
			</CardHeader>
			<CardBody>
				<Stack>
					<CloseButton variant="outline" />
				</Stack>
			</CardBody>
		</Card>
	{/snippet}
</DualThemeLayout>
