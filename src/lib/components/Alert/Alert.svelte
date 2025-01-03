<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import CardHeader from '$lib/components/Card/CardHeader.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import Text from '$lib/components/Text/Text.svelte';
	import CloseButton from '$lib/components/CloseButton/CloseButton.svelte';
	import type { Color } from '$lib/types.js';
	import { cleanClass } from '$lib/utils.js';
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
		class?: string;
		duration?: number;
		closable?: boolean;
		controlled?: boolean;
		onClose?: () => void;
		children?: Snippet;
	};

	const {
		color = 'primary',
		icon: iconOverride,
		title,
		class: className,
		duration,
		controlled,
		closable,
		onClose,
		children,
	}: Props = $props();

	let open = $state(true);

	if (duration) {
		setTimeout(() => handleClose(), duration);
	}

	const handleClose = () => {
		if (!open) {
			return;
		}

		if (!controlled) {
			open = false;
		}

		onClose?.();
	};

	const icons: Partial<Record<Color, string>> = {
		success: mdiCheckCircleOutline,
		warning: mdiAlertOutline,
		danger: mdiCloseCircleOutline,
	};

	const icon = $derived(
		iconOverride === false ? undefined : iconOverride || (icons[color] ?? mdiInformationOutline),
	);
</script>

{#if open}
	<Card {color} variant="subtle" class={cleanClass(className)}>
		<CardHeader>
			<div class="flex justify-between">
				<div class={cleanClass('flex gap-2')}>
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
				{#if closable || onClose}
					<div>
						<CloseButton onclick={handleClose} />
					</div>
				{/if}
			</div>
		</CardHeader>
	</Card>
{/if}
