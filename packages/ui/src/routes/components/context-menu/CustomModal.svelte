<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
  import Modal from '$lib/components/Modal/Modal.svelte';
  import ModalBody from '$lib/components/Modal/ModalBody.svelte';
  import ModalFooter from '$lib/components/Modal/ModalFooter.svelte';
  import HStack from '$lib/components/Stack/HStack.svelte';
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
