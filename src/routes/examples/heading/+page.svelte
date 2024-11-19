<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import { colors } from '$docs/constants.js';
	import { Card, CardBody, CardHeader, CardTitle, Heading, Stack } from '@immich/ui';

	const text = 'Heading';
</script>

<DualThemeLayout name="Heading">
	{#snippet component()}
		<Card>
			<CardHeader>
				<CardTitle>Sizes</CardTitle>
			</CardHeader>
			<CardBody>
				<Stack>
					<Heading size="tiny">{text} (tiny)</Heading>
					<Heading size="small">{text} (small)</Heading>
					<Heading size="medium">{text} (medium)</Heading>
					<Heading size="large">{text} (large)</Heading>
					<Heading size="giant">{text} (giant)</Heading>
					<Heading size="title">{text} (title)</Heading>
				</Stack>
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Colors</CardTitle>
			</CardHeader>
			<CardBody>
				<Stack>
					{#each colors as color}
						<Heading size="medium" {color} class="capitalize">{text} ({color})</Heading>
					{/each}
				</Stack>
			</CardBody>
		</Card>
	{/snippet}
</DualThemeLayout>
