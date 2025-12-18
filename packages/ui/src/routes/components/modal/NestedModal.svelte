<script lang="ts">
  import Lorem from '$docs/components/Lorem.svelte';
  import {
    Button,
    CommandPaletteProvider,
    defaultProvider,
    Modal,
    ModalBody,
    ModalFooter,
    modalManager,
  } from '@immich/ui';
  import { mdiCheck } from '@mdi/js';

  type Props = { onClose: () => void };

  const { onClose }: Props = $props();

  const onClick = async () => {
    const confirmed = await modalManager.showDialog({
      title: 'Close modal',
      prompt: 'Are you sure you want to close this modal?',
      size: 'small',
    });

    if (confirmed) {
      onClose();
    }
  };

  const commands = [
    {
      onAction: onClick,
      title: 'Open Dialog',
      description: 'Open nested confirm dialog',
      icon: mdiCheck,
      iconClass: '',
    },
  ];

  const providers = [defaultProvider({ name: 'Page', items: commands })];
</script>

<Modal title="Modal Title" {onClose}>
  <ModalBody>
    <CommandPaletteProvider {providers} />
    <Lorem />
  </ModalBody>
  <ModalFooter>
    <Button onclick={() => onClick()}>My button!</Button>
  </ModalFooter>
</Modal>
