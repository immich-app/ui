<script lang="ts">
	import { sizes as defaultSizes } from '$docs/constants.js';
	import { Card, CardBody, CardHeader, CardTitle, Logo } from '@immich/ui';

	const sizes = [...defaultSizes, 'landing'] as const;
	type Props = { theme?: 'dark' | 'light' };
	const { theme = 'dark' }: Props = $props();
</script>

<div class="flex flex-col gap-4">
	<Card>
		<CardHeader>
			<CardTitle>Logo</CardTitle>
		</CardHeader>
		<CardBody>
			<div class="m-2 flex flex-col gap-2">
				{#each sizes as size}
					<div class="flex gap-1 rounded-xl bg-gray-300 p-2 dark:bg-gray-600">
						<Logo {size} {theme} variant="logo"></Logo>
						<Logo {size} {theme} variant="logo"></Logo>
						<Logo {size} {theme} variant="logo"></Logo>
					</div>
				{/each}
			</div>
		</CardBody>
	</Card>
	<Card>
		<CardHeader>
			<CardTitle>Icon</CardTitle>
		</CardHeader>
		<CardBody>
			{#each sizes as size}
				<div>
					<Logo {size} {theme} variant="icon"></Logo>
				</div>
			{/each}
		</CardBody>
	</Card>
	<Card>
		<CardHeader>
			<CardTitle>Inline</CardTitle>
		</CardHeader>
		<CardBody>
			{#each sizes as size}
				<div>
					<Logo {size} {theme} variant="inline"></Logo>
				</div>
			{/each}
		</CardBody>
	</Card>

	<Card>
		<CardHeader>
			<CardTitle>Stacked</CardTitle>
		</CardHeader>
		<CardBody>
			{#each sizes as size}
				<div>
					<Logo {size} {theme} variant="stacked"></Logo>
				</div>
			{/each}
		</CardBody>
	</Card>
</div>
