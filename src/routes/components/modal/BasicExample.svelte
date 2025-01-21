<script lang="ts">
	import Lorem from '$docs/components/Lorem.svelte';
	import { Button, Modal, ModalBody } from '@immich/ui';

	let open = $state(false);
</script>

<Button onclick={() => (open = true)}>Open</Button>

{#if open}
	<Modal title="Modal Title" onClose={() => (open = false)}>
		<ModalBody>
			<Lorem />
		</ModalBody>
	</Modal>
{/if}
