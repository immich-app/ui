<script lang="ts">
  import { Button, modalManager } from '@immich/ui';
  import BasicModal from './BasicModal.svelte';
</script>

<Button onclick={() => modalManager.show(BasicModal)}>Open</Button>
