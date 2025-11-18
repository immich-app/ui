<script lang="ts">
  import Input from '$lib/components/Input/Input.svelte';
  import { Button, Field, FormModal, toastManager } from '@immich/ui';

  let isOpen = $state(false);
  let value = $state('World');

  const handleSubmit = () => {
    toastManager.show({ title: `Hello ${value}` });
    onClose();
  };

  const onClose = () => (isOpen = false);
</script>

<Button onclick={() => (isOpen = true)}>Open</Button>

{#if isOpen}
  <FormModal title="Form Modal" onSubmit={handleSubmit} {onClose}>
    <Field label="Hello">
      <Input bind:value />
    </Field>
  </FormModal>
{/if}
