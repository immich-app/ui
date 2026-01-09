<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
  import Modal from '$lib/components/Modal/Modal.svelte';
  import ModalBody from '$lib/components/Modal/ModalBody.svelte';
  import ModalFooter from '$lib/components/Modal/ModalFooter.svelte';
  import { t } from '$lib/services/translation.svelte.js';
  import type { Color, ModalSize } from '$lib/types.js';
  import type { Snippet } from 'svelte';

  type Props = {
    title: string;
    icon?: string | boolean;
    closeText?: string;
    closeColor?: Color;
    size?: ModalSize;
    onClose: () => void;
    children: Snippet;
  };

  let {
    title,
    icon,
    closeText = t('close'),
    closeColor = 'secondary',
    size = 'small',
    onClose = () => {},
    children,
  }: Props = $props();
</script>

<Modal {title} {onClose} {size} {icon}>
  <ModalBody {children} />
  <ModalFooter>
    <Button shape="round" color={closeColor} fullWidth onclick={onClose}>
      {closeText}
    </Button>
  </ModalFooter>
</Modal>
