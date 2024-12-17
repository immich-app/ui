<script lang="ts">
	import type { Theme } from '$docs/constants.js';
	import { Button, Card, CardBody, CardHeader, CardTitle, HStack, Icon } from '@immich/ui';
	import { mdiEye, mdiXml } from '@mdi/js';
	import type { Component as SvelteComponent } from 'svelte';
	import { HighlightSvelte, LineNumbers } from 'svelte-highlight';
	import atomOneDark from 'svelte-highlight/styles/atom-one-dark';

	type Props = {
		title: string;
		example: string;
		component: SvelteComponent;
		theme: Theme;
	};

	const { title, component: Component, example }: Props = $props();

	let viewMode = $state<'code' | 'example'>('example');

	const handleToggle = () => {
		viewMode = viewMode === 'code' ? 'example' : 'code';
	};
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html atomOneDark}
</svelte:head>

<Card>
	<CardHeader>
		<div class="flex justify-between">
			<CardTitle>{title}</CardTitle>
			<HStack gap={1}>
				<Button disabled={viewMode === 'example'} onclick={handleToggle} size="small">
					<Icon icon={mdiEye} size="1.5em" />
					<span>Preview</span>
				</Button>
				<Button disabled={viewMode === 'code'} onclick={handleToggle} size="small">
					<Icon icon={mdiXml} size="1.5em" />
					<span>Code</span>
				</Button>
			</HStack>
		</div>
	</CardHeader>
	<CardBody class={viewMode === 'code' ? 'p-0 pt-4' : ''}>
		{#if viewMode === 'example'}
			<Component />
		{:else}
			<HighlightSvelte code={example.trim()} let:highlighted>
				<LineNumbers {highlighted} hideBorder wrapLines />
			</HighlightSvelte>
		{/if}
	</CardBody>
</Card>
