<script lang="ts">
	import { type ExampleCardProps } from '$docs/constants.js';
	import { Button, Card, CardBody, CardHeader, CardTitle, HStack, Theme } from '@immich/ui';
	import { mdiEye, mdiXml } from '@mdi/js';
	import { HighlightSvelte, LineNumbers } from 'svelte-highlight';
	import atomOneDark from 'svelte-highlight/styles/atom-one-dark';

	const { title, component: Component, code, forceTheme }: ExampleCardProps = $props();

	let viewMode = $state<'code' | 'preview'>('preview');

	const handleToggle = () => {
		viewMode = viewMode === 'code' ? 'preview' : 'code';
	};

	function getCardBodyClass(viewMode: string, forceTheme?: Theme): string {
		if (viewMode === 'code') {
			return 'p-0';
		}

		if (forceTheme === Theme.Light) {
			return 'bg-white dark:bg-white';
		} else if (forceTheme === Theme.Dark) {
			return 'bg-black dark:bg-black';
		}

		return '';
	}

	const cardBodyClass = $derived(getCardBodyClass(viewMode, forceTheme));
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html atomOneDark}
</svelte:head>

<Card>
	<CardHeader>
		<div class="flex justify-between">
			<CardTitle tag="h2">{title}</CardTitle>
			<HStack gap={1}>
				<Button
					leadingIcon={mdiEye}
					disabled={viewMode === 'preview'}
					onclick={handleToggle}
					size="small">Preview</Button
				>
				<Button
					leadingIcon={mdiXml}
					disabled={viewMode === 'code'}
					onclick={handleToggle}
					size="small">Code</Button
				>
			</HStack>
		</div>
	</CardHeader>
	<CardBody class={cardBodyClass}>
		{#if viewMode === 'preview'}
			<Component />
		{:else}
			<HighlightSvelte code={code.trim().replaceAll(/\t/gm, '  ')} let:highlighted>
				<LineNumbers {highlighted} hideBorder wrapLines />
			</HighlightSvelte>
		{/if}
	</CardBody>
</Card>
