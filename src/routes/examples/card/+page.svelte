<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import Lorem from '$docs/components/Lorem.svelte';
	import { colors } from '$docs/constants.js';
	import { Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle } from '@immich/ui';
</script>

<DualThemeLayout name="Card">
	{#snippet component()}
		<Card>
			<CardHeader>
				<CardTitle>Title</CardTitle>
			</CardHeader>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Card with title</CardTitle>
			</CardHeader>
			<CardBody>
				<Lorem />
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Card with title and footer</CardTitle>
			</CardHeader>
			<CardBody>
				<Lorem />
			</CardBody>
			<CardFooter>Footer goes here</CardFooter>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Card with title, description, and footer</CardTitle>
				<CardDescription>This is the description</CardDescription>
			</CardHeader>
			<CardBody>
				<Lorem />
			</CardBody>
			<CardFooter>Footer</CardFooter>
		</Card>

		{#each colors as color}
			<Card {color} variant="outline">
				<CardHeader>
					<CardTitle class="capitalize">Outline ({color})</CardTitle>
				</CardHeader>
				<CardBody>
					<Lorem />
				</CardBody>
			</Card>
		{/each}

		{#each colors as color}
			<Card {color} variant="filled">
				<CardHeader>
					<CardTitle class="capitalize">Filled ({color})</CardTitle>
				</CardHeader>
				<CardBody>
					<Lorem />
				</CardBody>
			</Card>
		{/each}

		{#each colors as color}
			<Card {color} variant="subtle">
				<CardHeader>
					<CardTitle class="capitalize">Subtle ({color})</CardTitle>
				</CardHeader>
				<CardBody>
					<Lorem />
				</CardBody>
			</Card>
		{/each}

		{#each colors as color}
			<Card {color} expandable variant="outline">
				<CardHeader>
					<CardTitle class="capitalize">Outline ({color})</CardTitle>
				</CardHeader>
				<CardBody>
					<Lorem />
				</CardBody>
			</Card>
		{/each}

		{#each colors as color}
			<Card {color} expandable variant="filled">
				<CardHeader>
					<CardTitle class="capitalize">Filled ({color})</CardTitle>
				</CardHeader>
				<CardBody>
					<Lorem />
				</CardBody>
			</Card>
		{/each}

		{#each colors as color}
			<Card {color} expandable variant="subtle">
				<CardHeader>
					<CardTitle class="capitalize">Subtle ({color})</CardTitle>
				</CardHeader>
				<CardBody>
					<Lorem />
				</CardBody>
			</Card>
		{/each}
	{/snippet}
</DualThemeLayout>
