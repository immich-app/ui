<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import { colors, shapes, sizes } from '$docs/constants.js';
	import { Card, CardBody, CardHeader, CardTitle, Checkbox, HStack, Stack } from '@immich/ui';
</script>

<DualThemeLayout name="Checkbox">
	{#snippet component()}
		<Card>
			<CardHeader>
				<CardTitle>Colors</CardTitle>
			</CardHeader>
			<CardBody>
				<Stack>
					{#each colors as color}
						<HStack>
							<Checkbox checked {color} />
							<Checkbox {color} />
							<Checkbox checked="indeterminate" {color} />
						</HStack>
					{/each}
				</Stack>
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Sizes</CardTitle>
			</CardHeader>
			<CardBody>
				<Stack>
					{#each sizes as size}
						<HStack>
							<Checkbox checked {size} />
							<Checkbox {size} />
							<Checkbox checked="indeterminate" {size} />
						</HStack>
					{/each}
				</Stack>
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Shapes</CardTitle>
			</CardHeader>
			<CardBody>
				<Stack>
					{#each shapes as shape}
						<HStack>
							<Checkbox checked {shape} />
							<Checkbox {shape} />
							<Checkbox checked="indeterminate" {shape} />
						</HStack>
					{/each}
				</Stack>
			</CardBody>
		</Card>
	{/snippet}
</DualThemeLayout>
