<script lang="ts">
	import ComponentCard from '$docs/components/ComponentCard.svelte';
	import Grid from '$docs/components/Grid.svelte';
	import { componentGroups } from '$docs/constants.js';
	import { Heading, Link, Stack, Text } from '@immich/ui';
</script>

<div class="max-w-screen-lg p-2">
	<Stack class="flex flex-col gap-4 px-8 py-8" gap={8}>
		<Heading size="large">@immich/ui</Heading>
		<Text>
			@immich/ui is a collection of <Link href="https://svelte.dev">Svelte</Link> components that are
			shared across all Immich projects. It is designed to be a simple and easy-to-use library that provides
			a consistent look and feel.
		</Text>

		<Heading size="large">Install</Heading>
		<Text>@immich/ui is published as an npm package. You can install it using npm.</Text>

		<div class="py-4">
			<code class="rounded-lg border border-dark p-4">npm i --save-dev @immich/ui</code>
		</div>

		<Heading size="large">Components</Heading>
		<Stack gap={8}>
			{#each componentGroups as group}
				<Stack>
					<Heading size="medium">{group.name}</Heading>
					<Grid>
						{#each group.components as component}
							<ComponentCard {component} />
						{/each}
					</Grid>
				</Stack>
			{/each}
		</Stack>
	</Stack>
</div>
