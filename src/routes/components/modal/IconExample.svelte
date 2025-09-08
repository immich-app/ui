<script lang="ts">
	import Lorem from '$docs/components/Lorem.svelte';
	import { Button, Input, Modal, ModalBody, ModalHeader, Stack } from '@immich/ui';
	import { mdiDownload } from '@mdi/js';

	let item = $state(0);
</script>

<Stack direction="row">
	<Button onclick={() => (item = 1)}>Open Custom Icon</Button>
	<Button onclick={() => (item = 2)}>Open Logo Icon</Button>
	<Button onclick={() => (item = 3)}>Open No Icon</Button>
	<Button onclick={() => (item = 4)}>Custom header</Button>
</Stack>

{#if item === 1}
	<Modal title="Custom Icon" icon={mdiDownload} onClose={() => (item = 0)}>
		<ModalBody>
			<Lorem />
		</ModalBody>
	</Modal>
{:else if item === 2}
	<Modal title="Logo Icon" onClose={() => (item = 0)}>
		<ModalBody>
			<Lorem />
		</ModalBody>
	</Modal>
{:else if item === 3}
	<Modal title="No Icon" icon={false} onClose={() => (item = 0)}>
		<ModalBody>
			<Lorem />
		</ModalBody>
	</Modal>
{:else if item === 4}
	<Modal onClose={() => (item = 0)} closeOnBackdropClick>
		<ModalHeader>
			<Input placeholder="Search..." />
		</ModalHeader>
		<ModalBody>
			<Lorem />
		</ModalBody>
	</Modal>
{/if}
