<script lang="ts">
  import { withChildrenSnippets } from '$lib/common/use-child.svelte.js';
  import Card from '$lib/components/Card/Card.svelte';
  import CardBody from '$lib/components/Card/CardBody.svelte';
  import CardFooter from '$lib/components/Card/CardFooter.svelte';
  import CardHeader from '$lib/components/Card/CardHeader.svelte';
  import CardTitle from '$lib/components/Card/CardTitle.svelte';
  import CloseButton from '$lib/components/CloseButton/CloseButton.svelte';
  import Icon from '$lib/components/Icon/Icon.svelte';
  import Logo from '$lib/components/Logo/Logo.svelte';
  import { ChildKey } from '$lib/constants.js';
  import type { ModalSize } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import { Dialog } from 'bits-ui';
  import { tick, type Snippet } from 'svelte';
  import { tv } from 'tailwind-variants';

  type Props = {
    title?: string;
    icon?: string | boolean;
    size?: ModalSize;
    class?: string;
    expandable?: boolean;
    closeOnEsc?: boolean;
    closeOnBackdropClick?: boolean;
    children: Snippet;
    onClose?: () => void;
    onEscapeKeydown?: (event: KeyboardEvent) => void;
  };

  let {
    size = 'medium',
    onClose,
    onEscapeKeydown,
    icon = true,
    title,
    class: className,
    closeOnEsc = true,
    closeOnBackdropClick = false,
    children,
  }: Props = $props();

  const modalStyles = tv({
    base: 'bg-light dark:bg-subtle border-subtle shadow-primary/20 flex rounded-none border shadow-sm sm:rounded-2xl dark:border-white/10',
    variants: {
      size: {
        tiny: 'h-full sm:h-min md:max-w-sm',
        small: 'h-full sm:h-min md:max-w-md',
        medium: 'h-full sm:h-min md:max-w-(--breakpoint-sm)',
        large: 'h-full sm:h-min md:max-w-(--breakpoint-md)',
        giant: 'h-full sm:h-min md:max-w-(--breakpoint-lg)',
        full: 'h-full w-full',
      },
    },
  });

  const modalContentStyles = tv({
    base: 'fixed inset-0 m-auto flex grow sm:p-4',
    variants: {
      size: {
        tiny: 'sm:h-min md:max-w-sm',
        small: 'sm:h-min md:max-w-md',
        medium: 'sm:h-min md:max-w-(--breakpoint-sm)',
        large: 'sm:h-min md:max-w-(--breakpoint-md)',
        giant: 'sm:h-min md:max-w-(--breakpoint-lg)',
        full: '',
      },
    },
  });

  const { getChildren: getChildSnippet } = withChildrenSnippets(ChildKey.Modal);
  const headerChildren = $derived(getChildSnippet(ChildKey.ModalHeader));
  const bodyChildren = $derived(getChildSnippet(ChildKey.ModalBody));
  const footerChildren = $derived(getChildSnippet(ChildKey.ModalFooter));

  const handleClose = async () => {
    // wait for bits-ui to complete its event cycle
    await tick();
    await new Promise((resolve) => setTimeout(resolve, 10));

    onClose?.();
  };

  let cardRef = $state<HTMLElement | null>(null);
  let contentRef = $state<HTMLElement | null>(null);
  $effect(() => {
    contentRef && (contentRef.style.maxHeight = '100dvh');
  });
  const interactOutsideBehavior = $derived(closeOnBackdropClick ? 'close' : 'ignore');
  const escapeKeydownBehavior = $derived(closeOnEsc ? 'close' : 'ignore');
</script>

<Dialog.Root open={true} onOpenChange={(isOpen: boolean) => !isOpen && handleClose()}>
  <Dialog.Portal>
    <Dialog.Overlay class="fixed start-0 top-0 flex h-dvh max-h-dvh w-screen bg-black/30" />
    <Dialog.Content
      bind:ref={contentRef}
      {onEscapeKeydown}
      {escapeKeydownBehavior}
      {interactOutsideBehavior}
      class={cleanClass(modalContentStyles({ size }))}
    >
      <div class={cleanClass('flex grow flex-col justify-center')}>
        <Card bind:ref={cardRef} class={cleanClass(modalStyles({ size }), className)}>
          <CardHeader class="border-b border-gray-200 px-5 py-3 dark:border-white/10">
            {#if headerChildren}
              {@render headerChildren.snippet()}
            {:else if title}
              <div class="flex items-center justify-between gap-2">
                {#if typeof icon === 'string'}
                  <Icon {icon} size="1.5rem" aria-hidden />
                {:else if icon}
                  <Logo variant="icon" size="tiny" />
                {/if}
                <CardTitle tag="p" class="text-dark/90 grow text-lg font-semibold">{title}</CardTitle>
                <CloseButton class="-me-2" onclick={() => handleClose()} />
              </div>
            {/if}
          </CardHeader>

          <CardBody class="grow px-5">
            {@render bodyChildren?.snippet()}
          </CardBody>

          {#if footerChildren}
            <CardFooter class="border-t border-gray-200 dark:border-white/10">
              {@render footerChildren.snippet()}
            </CardFooter>
          {/if}
        </Card>
      </div>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
{@render children?.()}
