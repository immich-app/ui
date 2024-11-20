<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import { colors, sizes } from '$docs/constants.js';
	import { Card, CardBody, CardHeader, CardTitle, HStack, LoadingSpinner, Stack } from '@immich/ui';
</script>

<DualThemeLayout name="LoadingSpinner">
	{#snippet component()}
		<Card>
			<CardHeader>
				<CardTitle>Colors/Sizes</CardTitle>
			</CardHeader>
			<CardBody>
				<Stack>
					{#each sizes as size}
						<HStack wrap>
							{#each colors as color}
								<LoadingSpinner {color} {size}></LoadingSpinner>
							{/each}
						</HStack>
					{/each}
				</Stack>
			</CardBody>
		</Card>
	{/snippet}
</DualThemeLayout>
