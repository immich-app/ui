<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import { colors } from '$docs/constants.js';
	import { Card, CardBody, CardHeader, CardTitle, Text } from '@immich/ui';

	const text = 'The quick brown fox jumps over the lazy dog';
</script>

<DualThemeLayout name="Text">
	{#snippet component()}
		<div class="flex flex-col gap-4">
			<section class="flex flex-col gap-4">
				<Card>
					<CardHeader>
						<CardTitle>Sizes</CardTitle>
					</CardHeader>
					<CardBody>
						<div class="flex flex-col gap-4">
							<Text size="tiny">{text} (tiny)</Text>
							<Text size="small">{text} (small)</Text>
							<Text size="medium">{text} (medium)</Text>
							<Text size="large">{text} (large)</Text>
							<Text size="giant">{text} (giant)</Text>
						</div>
					</CardBody>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Colors</CardTitle>
					</CardHeader>
					<CardBody>
						<div class="flex flex-col gap-4">
							{#each colors as color}
								<Text size="medium" {color} class="capitalize">{text} ({color})</Text>
							{/each}
						</div>
					</CardBody>
				</Card>
			</section>
		</div>
	{/snippet}
</DualThemeLayout>
