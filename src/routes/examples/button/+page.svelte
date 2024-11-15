<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import { colors, shapes, sizes } from '$docs/constants.js';
	import { Button, Card, CardBody, CardHeader, CardTitle } from '@immich/ui';
</script>

<DualThemeLayout name="Button">
	{#snippet component()}
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
	{/snippet}
</DualThemeLayout>
