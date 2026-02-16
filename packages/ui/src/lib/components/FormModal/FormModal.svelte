<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
  import Modal from '$lib/components/Modal/Modal.svelte';
  import ModalBody from '$lib/components/Modal/ModalBody.svelte';
  import ModalFooter from '$lib/components/Modal/ModalFooter.svelte';
  import HStack from '$lib/components/Stack/HStack.svelte';
  import { t } from '$lib/services/translation.svelte.js';
  import type { Color, ModalSize } from '$lib/types.js';
  import { generateId } from '$lib/utilities/internal.js';
  import type { Snippet } from 'svelte';

  type Props = {
    title: string;
    icon?: string | boolean;
    submitText?: string;
    submitColor?: Color;
    cancelText?: string;
    cancelColor?: Color;
    disabled?: boolean;
    size?: ModalSize;
    preventDefault?: boolean;
    onClose: () => void;
    onOpenAutoFocus?: (event: Event) => void;
    onReset?: (event: Event) => void;
    onSubmit: (event: SubmitEvent) => void;
    children: Snippet<[{ formId: string }]>;
  };

  let {
    title,
    icon,
    submitText = t('save'),
    submitColor = 'primary',
    cancelText = t('cancel'),
    cancelColor = 'secondary',
    disabled = false,
    size = 'small',
    preventDefault = true,
    onClose = () => {},
    onOpenAutoFocus,
    onReset,
    onSubmit,
    children,
  }: Props = $props();

  const onsubmit = (event: SubmitEvent) => {
    if (preventDefault) {
      event.preventDefault();
    }

    onSubmit(event);
  };

  const onreset = (event: Event) => {
    if (preventDefault) {
      event.preventDefault();
    }

    onReset?.(event);
  };

  const formId = generateId();
</script>

<Modal {title} {onClose} {size} {icon} {onOpenAutoFocus}>
  <ModalBody>
    <form {onsubmit} {onreset} id={formId}>
      {@render children({ formId })}
    </form>
  </ModalBody>
  <ModalFooter>
    <HStack fullWidth>
      <Button shape="round" color={cancelColor} fullWidth onclick={() => onClose()}>
        {cancelText}
      </Button>
      <Button shape="round" type="submit" tabindex={1} color={submitColor} fullWidth {disabled} form={formId}>
        {submitText}
      </Button>
    </HStack>
  </ModalFooter>
</Modal>
