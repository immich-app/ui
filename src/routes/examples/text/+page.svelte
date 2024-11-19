<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import { colors } from '$docs/constants.js';
	import { Card, CardBody, CardHeader, CardTitle, Stack, Text } from '@immich/ui';

	const text = 'The quick brown fox jumps over the lazy dog';
</script>

<DualThemeLayout name="Text">
	{#snippet component()}
		<Stack gap={4}>
			<Card>
				<CardHeader>
					<CardTitle>Sizes</CardTitle>
				</CardHeader>
				<CardBody>
					<Stack>
						<Text size="tiny">{text} (tiny)</Text>
						<Text size="small">{text} (small)</Text>
						<Text size="medium">{text} (medium)</Text>
						<Text size="large">{text} (large)</Text>
						<Text size="giant">{text} (giant)</Text>
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
							<Text size="medium" {color} class="capitalize">{text} ({color})</Text>
						{/each}
					</Stack>
				</CardBody>
			</Card>
		</Stack>
	{/snippet}
</DualThemeLayout>
