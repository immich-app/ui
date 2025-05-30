<script lang="ts">
	import { type ExampleCardProps } from '$docs/constants.js';
	import { Button, Card, CardBody, CardHeader, CardTitle, HStack, Theme } from '@immich/ui';
	import { mdiEye, mdiXml } from '@mdi/js';
	import { HighlightSvelte, LineNumbers } from 'svelte-highlight';
	import atomOneDark from 'svelte-highlight/styles/atom-one-dark';

	const { title, component: Component, code, theme }: ExampleCardProps = $props();

	let viewMode = $state<'code' | 'preview'>('preview');

	const handleToggle = () => {
		viewMode = viewMode === 'code' ? 'preview' : 'code';
	};

	function getCardBodyClass(viewMode: string, theme?: Theme): string {
		if (viewMode === 'code') {
			return 'p-0';
		}

		if (theme === Theme.Light) {
			return 'bg-white dark:bg-white';
		} else if (theme === Theme.Dark) {
			return 'bg-black dark:bg-black';
		}

		return '';
	}

	const cardBodyClass = $derived(getCardBodyClass(viewMode, theme));
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
