<script lang="ts">
	import { Button, Link } from '@immich/ui';
	import ConfirmModal from '@immich/ui/components/ConfirmModal/ConfirmModal.svelte';

	let isOpen = $state(false);
</script>

<Button onclick={() => (isOpen = true)}>Open ConfirmModal</Button>

{#if isOpen}
	<ConfirmModal
		onClose={() => {
			isOpen = false;
		}}
	>
		{#snippet promptSnippet()}
			<Link href="https://immich.store">Support Immich!</Link>
		{/snippet}
	</ConfirmModal>
{/if}
