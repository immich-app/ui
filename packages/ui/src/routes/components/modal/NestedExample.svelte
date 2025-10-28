<script lang="ts">
  import { Button, modalManager } from '@immich/ui';
  import NestedModal from './NestedModal.svelte';
</script>

<Button onclick={() => modalManager.show(NestedModal)}>Open Modal</Button>
