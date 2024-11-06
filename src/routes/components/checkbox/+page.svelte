<script lang="ts">
	import Checkbox from '$lib/components/Checkbox.svelte';
	import type { Color, Shape, Size } from '$lib/types.js';

	const colors: Color[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
	const sizes: Size[] = ['tiny', 'small', 'medium'];
	const shapes: Shape[] = ['rectangle', 'semi-round', 'round'];
</script>

<div class="h-100 flex h-full w-full flex-row">
	{#each ['light', 'dark'] as theme}
		<div class="flex w-1/2 flex-col bg-light text-dark {theme} gap-2 p-8">
			<h1 class="text-2xl capitalize">{theme}</h1>
			<h1 class="text-xl">Checkbox</h1>
			<hr class="my-2" />

			<div class="flex flex-col gap-4">
				<section>
					<h2>Colors</h2>
					<div class="flex flex-col gap-1">
						{#each colors as color}
							<div class="flex gap-1">
								<Checkbox checked {color} />
								<Checkbox {color} />
								<Checkbox checked="indeterminate" {color} />
							</div>
						{/each}
					</div>
				</section>

				<section>
					<h2>Sizes</h2>
					<div class="flex flex-col gap-1">
						{#each sizes as size}
							<div class="flex gap-1">
								<Checkbox checked {size} />
								<Checkbox {size} />
								<Checkbox checked="indeterminate" {size} />
							</div>
						{/each}
					</div>
				</section>

				<section>
					<h2>Shape</h2>
					<div class="flex flex-col gap-1">
						{#each shapes as shape}
							<div class="flex gap-1">
								<Checkbox checked {shape} />
								<Checkbox {shape} />
								<Checkbox checked="indeterminate" {shape} />
							</div>
						{/each}
					</div>
				</section>
			</div>
		</div>
	{/each}
</div>

<Checkbox checked size="large" shape="round" />
<Checkbox checked size="large" shape="semi-round" />
<Checkbox checked size="large" shape="rectangle" />
