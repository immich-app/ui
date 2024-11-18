<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import { colors } from '$docs/constants.js';
	import { Card, CardBody, CardHeader, CardTitle, Heading } from '@immich/ui';

	const text = 'Heading';
</script>

<DualThemeLayout name="Heading">
	{#snippet component()}
		<section class="flex flex-col gap-4">
			<Card>
				<CardHeader>
					<CardTitle>Sizes</CardTitle>
				</CardHeader>
				<CardBody>
					<div class="flex flex-col gap-4">
						<Heading size="tiny">{text} (tiny)</Heading>
						<Heading size="small">{text} (small)</Heading>
						<Heading size="medium">{text} (medium)</Heading>
						<Heading size="large">{text} (large)</Heading>
						<Heading size="giant">{text} (giant)</Heading>
						<Heading size="title">{text} (title)</Heading>
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
							<Heading size="medium" {color} class="capitalize">{text} ({color})</Heading>
						{/each}
					</div>
				</CardBody>
			</Card>
		</section>
	{/snippet}
</DualThemeLayout>
