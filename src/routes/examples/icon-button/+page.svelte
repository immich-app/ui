<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import { colors, shapes, sizes } from '$docs/constants.js';
	import { Card, CardBody, CardHeader, CardTitle, IconButton } from '@immich/ui';
	import { mdiMagnify } from '@mdi/js';

	const icon = mdiMagnify;
</script>

<DualThemeLayout name="IconButton">
	{#snippet component()}
		<div class="flex flex-col gap-4">
			<Card>
				<CardHeader>
					<CardTitle>Shapes</CardTitle>
				</CardHeader>
				<CardBody>
					<div class="flex flex-wrap gap-4">
						{#each shapes as shape}
							<IconButton {icon} {shape} />
						{/each}
					</div>
				</CardBody>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Colors</CardTitle>
				</CardHeader>
				<CardBody>
					<div class="flex flex-wrap gap-4">
						{#each colors as color}
							<IconButton {icon} {color}></IconButton>
						{/each}
					</div>
				</CardBody>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Outline</CardTitle>
				</CardHeader>
				<CardBody>
					<div class="flex flex-wrap gap-4">
						{#each colors as color}
							<IconButton {icon} variant="outline" {color}></IconButton>
						{/each}
					</div>
				</CardBody>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Ghost</CardTitle>
				</CardHeader>
				<CardBody>
					<div class="flex flex-wrap gap-4">
						{#each colors as color}
							<IconButton {icon} variant="ghost" {color}></IconButton>
						{/each}
					</div>
				</CardBody>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Hero</CardTitle>
				</CardHeader>
				<CardBody>
					<div class="flex flex-wrap gap-4">
						{#each colors as color}
							<IconButton {icon} variant="hero" {color}></IconButton>
						{/each}
					</div>
				</CardBody>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Disabled</CardTitle>
				</CardHeader>
				<CardBody>
					<div class="flex flex-wrap gap-4">
						{#each colors as color}
							<IconButton {icon} {color} disabled></IconButton>
						{/each}
					</div>
				</CardBody>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Sizes</CardTitle>
				</CardHeader>
				<CardBody>
					<div class="flex flex-wrap gap-4">
						{#each sizes as size}
							<div>
								<IconButton {icon} {size}></IconButton>
							</div>
						{/each}
					</div>
				</CardBody>
			</Card>
		</div>
	{/snippet}
</DualThemeLayout>
