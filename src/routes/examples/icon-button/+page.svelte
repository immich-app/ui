<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import { colors, shapes, sizes } from '$docs/constants.js';
	import { Card, CardBody, CardHeader, CardTitle, HStack, IconButton } from '@immich/ui';
	import { mdiMagnify } from '@mdi/js';

	const icon = mdiMagnify;
</script>

<DualThemeLayout name="IconButton">
	{#snippet component()}
		<Card>
			<CardHeader>
				<CardTitle>Shapes</CardTitle>
			</CardHeader>
			<CardBody>
				<HStack wrap>
					{#each shapes as shape}
						<IconButton {icon} {shape} />
					{/each}
				</HStack>
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Colors</CardTitle>
			</CardHeader>
			<CardBody>
				<HStack wrap>
					{#each colors as color}
						<IconButton {icon} {color}></IconButton>
					{/each}
				</HStack>
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Outline</CardTitle>
			</CardHeader>
			<CardBody>
				<HStack wrap>
					{#each colors as color}
						<IconButton {icon} variant="outline" {color}></IconButton>
					{/each}
				</HStack>
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Ghost</CardTitle>
			</CardHeader>
			<CardBody>
				<HStack wrap>
					{#each colors as color}
						<IconButton {icon} variant="ghost" {color}></IconButton>
					{/each}
				</HStack>
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Hero</CardTitle>
			</CardHeader>
			<CardBody>
				<HStack wrap>
					{#each colors as color}
						<IconButton {icon} variant="hero" {color}></IconButton>
					{/each}
				</HStack>
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Disabled</CardTitle>
			</CardHeader>
			<CardBody>
				<HStack wrap>
					{#each colors as color}
						<IconButton {icon} {color} disabled></IconButton>
					{/each}
				</HStack>
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Sizes</CardTitle>
			</CardHeader>
			<CardBody>
				<HStack wrap>
					{#each sizes as size}
						<div>
							<IconButton {icon} {size}></IconButton>
						</div>
					{/each}
				</HStack>
			</CardBody>
		</Card>
	{/snippet}
</DualThemeLayout>
