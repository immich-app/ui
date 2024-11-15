<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import { colors, shapes, sizes } from '$docs/constants.js';
	import { Card, CardBody, CardHeader, CardTitle, Checkbox } from '@immich/ui';
</script>

<DualThemeLayout name="Checkbox">
	{#snippet component()}
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
	{/snippet}
</DualThemeLayout>
