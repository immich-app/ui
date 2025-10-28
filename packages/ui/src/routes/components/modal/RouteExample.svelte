<script lang="ts">
  import Lorem from '$docs/components/Lorem.svelte';
  import { Button, Modal, ModalBody, Stack } from '@immich/ui';

  let item = $state(0);
</script>

<Stack direction="row">
  <Button onclick={() => (item = 1)}>Open 1</Button>
  <Button onclick={() => (item = 2)}>Open 2</Button>
  <Button onclick={() => (item = 3)}>Open 3</Button>
  <Button onclick={() => (item = 4)}>Open 4</Button>
</Stack>

{#if item}
  <Modal title="Open {item}" onClose={() => (item = 0)}>
    <ModalBody>
      <Lorem />
    </ModalBody>
  </Modal>
{/if}
