<script lang="ts">
  import { Button, HStack, Modal, ModalBody, ModalFooter } from '@immich/ui';
  import BasicExample from './BasicExample.svelte';

  interface Props {
    onClose: (confirmed: boolean) => void;
  }

  let { onClose }: Props = $props();

  const handleConfirm = () => {
    onClose(true);
  };
</script>

<Modal title="Modal example" onClose={() => onClose(false)}>
  <ModalBody>
    <BasicExample />
  </ModalBody>

  <ModalFooter>
    <HStack fullWidth>
      <Button shape="round" color="secondary" fullWidth onclick={() => onClose(false)}>Cancel</Button>
      <Button shape="round" fullWidth onclick={handleConfirm}>Confirm</Button>
    </HStack>
  </ModalFooter>
</Modal>
