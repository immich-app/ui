<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import Modal from '$lib/components/Modal/Modal.svelte';
	import ModalBody from '$lib/components/Modal/ModalBody.svelte';
	import ModalFooter from '$lib/components/Modal/ModalFooter.svelte';
	import HStack from '$lib/components/Stack/HStack.svelte';
	import type { Color } from '$lib/types.js';
	import { t } from '$lib/services/translation.svelte.js';
	import type { Snippet } from 'svelte';

	interface Props {
		title?: string;
		icon?: string | boolean;
		prompt?: string;
		confirmText?: string;
		confirmColor?: Color;
		disabled?: boolean;
		size?: 'small' | 'medium';
		onClose: (confirmed: boolean) => void;
		promptSnippet?: Snippet;
	}

	let {
		title = t('confirm'),
		icon,
		prompt = t('prompt_default'),
		confirmText = t('confirm'),
		confirmColor = 'danger',
		disabled = false,
		size = 'small',
		onClose,
		promptSnippet,
	}: Props = $props();

	const handleConfirm = () => {
		onClose(true);
	};
</script>

<Modal {title} onClose={() => onClose(false)} {size} {icon}>
	<ModalBody>
		{#if promptSnippet}{@render promptSnippet()}{:else}
			<p>{prompt}</p>
		{/if}
	</ModalBody>

	<ModalFooter>
		<HStack fullWidth>
			<Button shape="round" color="secondary" fullWidth onclick={() => onClose(false)}>
				{t('cancel')}
			</Button>
			<Button shape="round" color={confirmColor} fullWidth onclick={handleConfirm} {disabled}>
				{confirmText}
			</Button>
		</HStack>
	</ModalFooter>
</Modal>
