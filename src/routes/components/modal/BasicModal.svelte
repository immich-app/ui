<script lang="ts">
	import Lorem from '$docs/components/Lorem.svelte';
	import { Modal, ModalBody } from '@immich/ui';

	type Props = { onClose: () => void };

	const { onClose }: Props = $props();
</script>

<Modal title="Modal Title" {onClose}>
	<ModalBody>
		<Lorem />
	</ModalBody>
</Modal>
