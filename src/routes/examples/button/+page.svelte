<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import { colors, shapes, sizes } from '$docs/constants.js';
	import { Button, Card, CardBody, CardHeader, CardTitle, HStack, Stack } from '@immich/ui';
</script>

<DualThemeLayout name="Button">
	{#snippet component()}
		<Card>
			<CardHeader>
				<CardTitle>Shapes</CardTitle>
			</CardHeader>
			<CardBody>
				<HStack wrap>
					{#each shapes as shape}
						<Button {shape} class="capitalize">{shape}</Button>
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
						<Button {color} class="capitalize">{color}</Button>
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
						<Button variant="outline" {color}>Button</Button>
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
						<Button variant="ghost" {color}>Button</Button>
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
						<Button variant="hero" {color}>Button</Button>
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
						<Button {color} disabled>Button</Button>
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
							<Button {size} class="capitalize">{size}</Button>
						</div>
					{/each}
				</HStack>
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Full width</CardTitle>
			</CardHeader>
			<CardBody>
				<Stack>
					{#each colors as color}
						<div>
							<Button fullWidth {color}>Button</Button>
						</div>
					{/each}
				</Stack>
			</CardBody>
		</Card>
	{/snippet}
</DualThemeLayout>
