<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import { sizes } from '$docs/constants.js';
	import { Card, CardBody, CardHeader, CardTitle, HStack, Logo, VStack } from '@immich/ui';
</script>

<DualThemeLayout name="Button">
	{#snippet component({ theme })}
		<Card>
			<CardHeader>
				<CardTitle>Logo</CardTitle>
			</CardHeader>
			<CardBody>
				<VStack>
					{#each sizes as size}
						<Card color="secondary" variant="subtle">
							<CardBody>
								<HStack>
									<Logo {size} {theme} variant="logo"></Logo>
									<Logo {size} {theme} variant="logo"></Logo>
									<Logo {size} {theme} variant="logo"></Logo>
								</HStack>
							</CardBody>
						</Card>
					{/each}
				</VStack>
			</CardBody>
		</Card>
		<Card>
			<CardHeader>
				<CardTitle>Icon</CardTitle>
			</CardHeader>
			<CardBody>
				{#each sizes as size}
					<div>
						<Logo {size} {theme} variant="icon"></Logo>
					</div>
				{/each}
			</CardBody>
		</Card>
		<Card>
			<CardHeader>
				<CardTitle>Inline</CardTitle>
			</CardHeader>
			<CardBody>
				{#each sizes as size}
					<div>
						<Logo {size} {theme} variant="inline"></Logo>
					</div>
				{/each}
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Stacked</CardTitle>
			</CardHeader>
			<CardBody>
				{#each sizes as size}
					<div>
						<Logo {size} {theme} variant="stacked"></Logo>
					</div>
				{/each}
			</CardBody>
		</Card>
	{/snippet}
</DualThemeLayout>
