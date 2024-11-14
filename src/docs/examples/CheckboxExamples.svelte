<script lang="ts">
	import Checkbox from '$lib/components/Checkbox.svelte';
	import Card from '$lib/components/Card.svelte';
	import CardBody from '$lib/components/CardBody.svelte';
	import CardHeader from '$lib/components/CardHeader.svelte';
	import CardTitle from '$lib/components/CardTitle.svelte';
	import type { Color, Shape, Size } from '$lib/types.js';

	const colors: Color[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
	const sizes: Size[] = ['tiny', 'small', 'medium'];
	const shapes: Shape[] = ['rectangle', 'semi-round', 'round'];
</script>

<div class="flex flex-col gap-4">
	<Card>
		<CardHeader>
			<CardTitle>Colors</CardTitle>
		</CardHeader>
		<CardBody>
			<div class="flex flex-col gap-4">
				{#each colors as color}
					<div class="flex gap-4">
						<Checkbox checked {color} />
						<Checkbox {color} />
						<Checkbox checked="indeterminate" {color} />
					</div>
				{/each}
			</div>
		</CardBody>
	</Card>

	<Card>
		<CardHeader>
			<CardTitle>Sizes</CardTitle>
		</CardHeader>
		<CardBody>
			<div class="flex flex-col gap-4">
				{#each sizes as size}
					<div class="flex gap-4">
						<Checkbox checked {size} />
						<Checkbox {size} />
						<Checkbox checked="indeterminate" {size} />
					</div>
				{/each}
			</div>
		</CardBody>
	</Card>

	<Card>
		<CardHeader>
			<CardTitle>Shapes</CardTitle>
		</CardHeader>
		<CardBody>
			<div class="flex flex-col gap-4">
				{#each shapes as shape}
					<div class="flex gap-4">
						<Checkbox checked {shape} />
						<Checkbox {shape} />
						<Checkbox checked="indeterminate" {shape} />
					</div>
				{/each}
			</div>
		</CardBody>
	</Card>
</div>
