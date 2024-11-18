<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import { colors, shapes, sizes } from '$docs/constants.js';
	import { Card, CardBody, CardHeader, CardTitle, Checkbox, HStack, VStack } from '@immich/ui';
</script>

<DualThemeLayout name="Checkbox">
	{#snippet component()}
		<Card>
			<CardHeader>
				<CardTitle>Colors</CardTitle>
			</CardHeader>
			<CardBody>
				<VStack>
					{#each colors as color}
						<HStack>
							<Checkbox checked {color} />
							<Checkbox {color} />
							<Checkbox checked="indeterminate" {color} />
						</HStack>
					{/each}
				</VStack>
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Sizes</CardTitle>
			</CardHeader>
			<CardBody>
				<VStack>
					{#each sizes as size}
						<HStack>
							<Checkbox checked {size} />
							<Checkbox {size} />
							<Checkbox checked="indeterminate" {size} />
						</HStack>
					{/each}
				</VStack>
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Shapes</CardTitle>
			</CardHeader>
			<CardBody>
				<VStack>
					{#each shapes as shape}
						<HStack>
							<Checkbox checked {shape} />
							<Checkbox {shape} />
							<Checkbox checked="indeterminate" {shape} />
						</HStack>
					{/each}
				</VStack>
			</CardBody>
		</Card>
	{/snippet}
</DualThemeLayout>
