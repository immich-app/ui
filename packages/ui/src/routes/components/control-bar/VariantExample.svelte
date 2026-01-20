<script lang="ts">
  import ComponentVariants from '$docs/components/ComponentVariants.svelte';
  import { exampleMenuItems } from '$docs/constants.js';
  import {
    Button,
    ContextMenuButton,
    ControlBar,
    ControlBarDescription,
    ControlBarHeader,
    ControlBarOverflow,
    ControlBarTitle,
    Heading,
    toastManager,
  } from '@immich/ui';
  import { mdiArrowLeft } from '@mdi/js';

  const alert = (message: string) => toastManager.primary(message);
  const onClose = () => alert('Close');
  const onDone = () => alert('Done');
</script>

<ComponentVariants>
  {#snippet child({ variant, label })}
    <Heading size="tiny" class="mb-2">{label}</Heading>
    <div class="mb-6 flex flex-col gap-4">
      <ControlBar {onClose} {variant}>
        <ControlBarHeader>
          <ControlBarTitle>2 Selected</ControlBarTitle>
        </ControlBarHeader>
        <ControlBarOverflow>
          <ContextMenuButton items={exampleMenuItems} />
        </ControlBarOverflow>
      </ControlBar>

      <ControlBar {onClose} closeIcon={mdiArrowLeft} {variant} translations={{ close: 'Back' }}>
        <ControlBarHeader>
          <ControlBarTitle>Mich</ControlBarTitle>
          <ControlBarDescription>Pictures of Mich</ControlBarDescription>
        </ControlBarHeader>
        <ControlBarOverflow>
          <Button variant="filled" color="primary" onclick={onDone}>Done</Button>
        </ControlBarOverflow>
      </ControlBar>
    </div>
  {/snippet}
</ComponentVariants>
