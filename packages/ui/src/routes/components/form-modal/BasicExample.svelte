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
  const onReset = () => {
    toastManager.info('Reset');
    value = 'World';
  };
</script>

<Button onclick={() => (isOpen = true)}>Open</Button>

{#if isOpen}
  <FormModal title="Form Modal" onSubmit={handleSubmit} {onClose} {onReset}>
    {#snippet children({ formId })}
      <Field label="Name">
        <Input bind:value />
      </Field>

      <div class="mt-2 flex justify-end">
        <Button type="reset" form={formId}>Reset</Button>
      </div>
    {/snippet}
  </FormModal>
{/if}
