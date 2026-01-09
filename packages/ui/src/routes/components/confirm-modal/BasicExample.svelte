<script lang="ts">
  import { Button, ConfirmModal, Link } from '@immich/ui';

  let isOpen = $state(false);
</script>

<Button onclick={() => (isOpen = true)}>Open ConfirmModal</Button>

{#if isOpen}
  <ConfirmModal
    confirmColor="primary"
    onClose={() => {
      isOpen = false;
    }}
  >
    {#snippet prompt()}
      <Link href="https://immich.store">Support Immich!</Link>
    {/snippet}
  </ConfirmModal>
{/if}
