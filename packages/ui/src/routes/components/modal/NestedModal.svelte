<script lang="ts">
  import Lorem from '$docs/components/Lorem.svelte';
  import { Button, Modal, ModalBody, ModalFooter, modalManager } from '@immich/ui';

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
