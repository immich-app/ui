<script lang="ts">
	import ComponentCard from '$docs/components/ComponentCard.svelte';
	import Grid from '$docs/components/Grid.svelte';
	import { componentGroups } from '$docs/constants.js';
	import { Code, Container, Heading, Link, Stack, Text } from '@immich/ui';
</script>

<Container size="large" class="p-2">
	<Stack class="flex flex-col gap-4 px-8 py-8" gap={8}>
		<Heading size="title">@immich/ui</Heading>
		<Text>
			@immich/ui is a collection of <Link href="https://svelte.dev">Svelte</Link> components that are
			shared across all Immich projects. It is designed to be a simple and easy-to-use library that provides
			a consistent look and feel.
		</Text>

		<Heading size="large">Install</Heading>
		<Text>@immich/ui is published as an npm package. You can install it using npm.</Text>
		<Code color="primary" variant="filled">npm i --save-dev @immich/ui</Code>

		<Heading size="large">Components</Heading>
		<Stack gap={8}>
			{#each componentGroups as group}
				<Stack>
					<Heading size="medium" class="mb-4">{group.title}</Heading>
					<Grid>
						{#each group.components as component}
							<ComponentCard {component} />
						{/each}
					</Grid>
				</Stack>
			{/each}
		</Stack>
	</Stack>
</Container>
