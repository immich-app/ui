<script lang="ts">
  import Lorem from '$docs/components/Lorem.svelte';
  import {
    Button,
    HStack,
    Modal,
    ModalBody,
    ModalFooter,
    Stack,
    Text,
    type ModalSize,
  } from '@immich/ui';

  let size = $state<ModalSize>('medium');
  let open = $state(false);

  const handleOpen = (modalSize: ModalSize) => {
    size = modalSize;
    open = true;
  };
  const handleClose = () => (open = false);
</script>

<HStack>
  <Button onclick={() => handleOpen('tiny')}>Tiny</Button>
  <Button onclick={() => handleOpen('small')}>Small</Button>
  <Button onclick={() => handleOpen('medium')}>Medium</Button>
  <Button onclick={() => handleOpen('large')}>Large</Button>
  <Button onclick={() => handleOpen('giant')}>Giant</Button>
  <Button onclick={() => handleOpen('full')}>Full</Button>
</HStack>

{#if open}
  <Modal title="Modal Title" {size} onClose={() => (open = false)}>
    <ModalBody>
      <Stack gap={4}>
        <Text><Lorem /></Text>
        <Text><Lorem /></Text>
        <Text><Lorem /></Text>
        <Text><Lorem /></Text>
        <Text><Lorem /></Text>
        <Text><Lorem /></Text>
      </Stack>
    </ModalBody>
    <ModalFooter>
      <div class="grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
        <Button onclick={handleClose} shape="round">Button 1</Button>
        <Button onclick={handleClose} shape="round" color="secondary">Button 2</Button>
      </div>
    </ModalFooter>
  </Modal>
{/if}
