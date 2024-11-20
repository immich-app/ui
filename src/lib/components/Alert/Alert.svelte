<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import CardHeader from '$lib/components/Card/CardHeader.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import Text from '$lib/components/Text/Text.svelte';
	import type { Color } from '$lib/types.js';
	import {
		mdiAlertOutline,
		mdiCheckCircleOutline,
		mdiCloseCircleOutline,
		mdiInformationOutline,
	} from '@mdi/js';
	import type { Snippet } from 'svelte';

	type Props = {
		color?: Color;
		icon?: string | false;
		title?: string;
		children?: Snippet;
	};

	const { color = 'info', icon: iconOverride, title, children }: Props = $props();

	const icons: Partial<Record<Color, string>> = {
		success: mdiCheckCircleOutline,
		warning: mdiAlertOutline,
		danger: mdiCloseCircleOutline,
	};

	const icon = $derived(
		iconOverride === false ? undefined : iconOverride || (icons[color] ?? mdiInformationOutline),
	);
</script>

<Card {color} variant="subtle">
	<CardHeader>
		<div class="flex gap-2">
			{#if icon}
				<div>
					<Icon {icon} size="1.5em" class="h-7" />
				</div>
			{/if}

			<div class="flex flex-col gap-2">
				{#if title}
					<Text size="large" fontWeight={children ? 'bold' : undefined}>{title}</Text>
				{/if}
				{#if children}
					{@render children()}
				{/if}
			</div>
		</div>
	</CardHeader>
</Card>
