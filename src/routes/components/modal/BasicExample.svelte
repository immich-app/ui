<script lang="ts">
	import Lorem from '$docs/components/Lorem.svelte';
	import { Button, Modal, ModalBody } from '@immich/ui';

	let open = $state(false);
</script>

<Button onclick={() => (open = true)}>Open</Button>

<Modal title="Modal Title" bind:open>
	<ModalBody>
		<Lorem />
	</ModalBody>
</Modal>
