<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
  import Modal from '$lib/components/Modal/Modal.svelte';
  import ModalBody from '$lib/components/Modal/ModalBody.svelte';
  import ModalFooter from '$lib/components/Modal/ModalFooter.svelte';
  import HStack from '$lib/components/Stack/HStack.svelte';
  import { t } from '$lib/services/translation.svelte.js';
  import type { Color } from '$lib/types.js';
  import { generateId } from '$lib/utilities/internal.js';
  import type { Snippet } from 'svelte';

  type Props = {
    title: string;
    icon?: string | boolean;
    submitText?: string;
    submitColor?: Color;
    disabled?: boolean;
    size?: 'small' | 'medium';
    preventDefault?: boolean;
    onClose?: () => void;
    onSubmit: (event: SubmitEvent) => void;
    children: Snippet;
  };

  let {
    title,
    icon,
    submitText = t('save'),
    submitColor = 'primary',
    disabled = false,
    size = 'small',
    preventDefault = true,
    onClose = () => {},
    onSubmit,
    children,
  }: Props = $props();

  const onsubmit = (event: SubmitEvent) => {
    if (preventDefault) {
      event.preventDefault();
    }

    onSubmit(event);
  };

  const formId = generateId();
</script>

<Modal {title} onClose={() => onClose()} {size} {icon}>
  <ModalBody>
    <form {onsubmit} id={formId}>
      {@render children()}
    </form>
  </ModalBody>

  <ModalFooter>
    <HStack fullWidth>
      <Button shape="round" color="secondary" fullWidth onclick={() => onClose()}>
        {t('cancel')}
      </Button>
      <Button shape="round" type="submit" tabindex={1} color={submitColor} fullWidth {disabled} form={formId}>
        {submitText}
      </Button>
    </HStack>
  </ModalFooter>
</Modal>
