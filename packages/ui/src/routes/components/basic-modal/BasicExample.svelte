<script lang="ts">
  import Lorem from '$docs/components/Lorem.svelte';
  import { BasicModal, Button, Field, Input, Select, Stack, type Color } from '@immich/ui';

  const colors: Array<{ label: string; value: Color }> = [
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
  ];

  let closeText = $state('Close');
  let closeColor = $state(colors[1]);
  let isOpen = $state(false);

  const onClose = () => (isOpen = false);
</script>

<Stack class="max-w-64">
  <Field label="Close text">
    <Input bind:value={closeText} />
  </Field>

  <Field label="Close color">
    <Select bind:value={closeColor} data={colors} />
  </Field>

  <div>
    <Button onclick={() => (isOpen = true)}>Open</Button>
  </div>
</Stack>

{#if isOpen}
  <BasicModal title="Basic Modal" {closeText} closeColor={closeColor.value} {onClose}>
    <Lorem />
  </BasicModal>
{/if}
