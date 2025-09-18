<script lang="ts">
  import Lorem from '$docs/components/Lorem.svelte';
  import { Modal, ModalBody, modalManager } from '@immich/ui';
  import ModalFooter from '@immich/ui/components/Modal/ModalFooter.svelte';
  import Button from '@immich/ui/internal/Button.svelte';

  type Props = { onClose: () => void };

  const { onClose }: Props = $props();

  const onClick = async () => {
    const confirmed = await modalManager.showDialog({
      title: 'Close modal',
      prompt: 'Are you sure you want to close this modal?',
      size: 'small',
    });

    if (confirmed) {
      onClose();
    }
  };
</script>

<Modal title="Modal Title" {onClose}>
  <ModalBody>
    <Lorem />
  </ModalBody>
  <ModalFooter>
    <Button onclick={() => onClick()}>My button!</Button>
  </ModalFooter>
</Modal>
