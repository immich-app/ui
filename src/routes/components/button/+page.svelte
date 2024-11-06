<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { Color, Shape, Size } from '$lib/types.js';

	const colors: Color[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
	const sizes: Size[] = ['tiny', 'small', 'medium', 'large', 'giant'];
	const shapes: Shape[] = ['rectangle', 'semi-round', 'round'];
</script>

<div class="h-100 flex h-full w-full flex-row">
	{#each ['light', 'dark'] as theme}
		<div class="flex w-1/2 flex-col bg-light text-dark {theme} gap-2 p-8">
			<h1 class="text-2xl capitalize">{theme}</h1>
			<h1 class="text-xl">Button</h1>
			<hr class="my-2" />

			<div class="flex flex-col gap-4">
				<section>
					<h2>Button Shape</h2>
					<div class="flex gap-1">
						{#each shapes as shape}
							<Button {shape} class="capitalize">{shape}</Button>
						{/each}
					</div>
				</section>

				<section>
					<h2>Button Colors</h2>
					<div class="flex gap-1">
						{#each colors as color}
							<Button {color} class="capitalize">{color}</Button>
						{/each}
					</div>
				</section>

				<section>
					<h2>Button Disabled</h2>
					<div class="flex gap-1">
						{#each colors as color}
							<Button {color} disabled>Button</Button>
						{/each}
					</div>
				</section>

				<section>
					<h2>Button Outline</h2>
					<div class="flex gap-1">
						{#each colors as color}
							<Button variant="outline" {color}>Button</Button>
						{/each}
					</div>
				</section>

				<section>
					<h2>Button Ghost</h2>
					<div class="flex gap-1">
						{#each colors as color}
							<Button variant="ghost" {color}>Button</Button>
						{/each}
					</div>
				</section>

				<section class="bg- p-4">
					<h2>Button Hero</h2>
					<div class="flex gap-1">
						{#each colors as color}
							<Button variant="hero" {color}>Button</Button>
						{/each}
					</div>
				</section>

				<section>
					<h2>Button Sizes</h2>
					<div class="flex gap-1">
						{#each sizes as size}
							<div>
								<Button {size} class="capitalize">{size}</Button>
							</div>
						{/each}
					</div>
				</section>

				<section>
					<h2>Button Full Width</h2>
					<div class="flex flex-col gap-1">
						{#each colors as color}
							<div>
								<Button fullWidth {color}>Button</Button>
							</div>
						{/each}
					</div>
				</section>
			</div>
		</div>
	{/each}
</div>
