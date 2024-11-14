<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import CardBody from '$lib/components/CardBody.svelte';
	import CardHeader from '$lib/components/CardHeader.svelte';
	import CardTitle from '$lib/components/CardTitle.svelte';
	import type { Color, Shape, Size } from '$lib/types.js';

	const colors: Color[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
	const sizes: Size[] = ['tiny', 'small', 'medium', 'large', 'giant'];
	const shapes: Shape[] = ['rectangle', 'semi-round', 'round'];
</script>

<div class="flex flex-col gap-4">
	<Card>
		<CardHeader>
			<CardTitle>Shapes</CardTitle>
		</CardHeader>
		<CardBody>
			<div class="flex flex-wrap gap-4">
				{#each shapes as shape}
					<Button {shape} class="capitalize">{shape}</Button>
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
					<Button {color} class="capitalize">{color}</Button>
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
					<Button variant="outline" {color}>Button</Button>
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
					<Button variant="ghost" {color}>Button</Button>
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
					<Button variant="hero" {color}>Button</Button>
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
					<Button {color} disabled>Button</Button>
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
						<Button {size} class="capitalize">{size}</Button>
					</div>
				{/each}
			</div>
		</CardBody>
	</Card>

	<Card>
		<CardHeader>
			<CardTitle>Full width</CardTitle>
		</CardHeader>
		<CardBody>
			<div class="flex flex-col gap-4">
				{#each colors as color}
					<div>
						<Button fullWidth {color}>Button</Button>
					</div>
				{/each}
			</div>
		</CardBody>
	</Card>
</div>
