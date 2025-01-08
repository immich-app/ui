<script lang="ts">
	import type { ExampleCardProps } from '$docs/constants.js';
	import { Button, Card, CardBody, CardHeader, CardTitle, HStack, Icon } from '@immich/ui';
	import { mdiEye, mdiXml } from '@mdi/js';
	import { HighlightSvelte, LineNumbers } from 'svelte-highlight';
	import atomOneDark from 'svelte-highlight/styles/atom-one-dark';

	const { title, component: Component, code }: ExampleCardProps = $props();

	let viewMode = $state<'code' | 'preview'>('preview');

	const handleToggle = () => {
		viewMode = viewMode === 'code' ? 'preview' : 'code';
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
				<Button disabled={viewMode === 'preview'} onclick={handleToggle} size="small">
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
	<CardBody class={viewMode === 'code' ? 'p-0' : ''}>
		{#if viewMode === 'preview'}
			<Component />
		{:else}
			<HighlightSvelte code={code.trim().replaceAll(/\t/gm, '  ')} let:highlighted>
				<LineNumbers {highlighted} hideBorder wrapLines />
			</HighlightSvelte>
		{/if}
	</CardBody>
</Card>
