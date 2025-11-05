<script lang="ts">
  import { Button, modalManager } from '@immich/ui';
  import CustomModal from './CustomModal.svelte';

  const handleOpen = async () => {
    await modalManager.show(CustomModal);
  };
</script>

<div>
  <Button onclick={handleOpen}>Open menu</Button>
</div>
