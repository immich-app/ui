<script lang="ts">
	import { IconButton, Card, CardBody, CardHeader, CardTitle } from '@immich/ui';
	import type { Color, Shape, Size } from '@immich/ui';
	import { mdiMagnify } from '@mdi/js';

	const colors: Color[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
	const sizes: Size[] = ['tiny', 'small', 'medium', 'large', 'giant'];
	const shapes: Shape[] = ['rectangle', 'semi-round', 'round'];
	const icon = mdiMagnify;
</script>

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
