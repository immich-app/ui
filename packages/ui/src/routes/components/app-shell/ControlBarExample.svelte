<script lang="ts">
  import { carouselImageItems, ExampleActions, exampleActions } from '$docs/constants.js';
  import {
    ActionBar,
    AppShell,
    AppShellBar,
    AppShellHeader,
    AppShellSidebar,
    Button,
    ControlBarHeader,
    ControlBarTitle,
    Heading,
    ImageCarousel,
    NavbarItem,
    Stack,
  } from '@immich/ui';
  import { mdiArrowLeft, mdiHome } from '@mdi/js';

  let selectionActive = $state(false);
</script>

<Stack>
  <div class="border">
    <AppShell class="h-[400px]">
      {#if selectionActive}
        <AppShellBar>
          <ActionBar actions={exampleActions} onClose={() => (selectionActive = false)} variant="filled">
            <ControlBarHeader>
              <ControlBarTitle>2 Selected</ControlBarTitle>
            </ControlBarHeader>
          </ActionBar>
        </AppShellBar>
      {/if}

      <AppShellHeader>
        <div class="p-4">
          <Heading size="tiny">Header</Heading>
        </div>
      </AppShellHeader>

      <AppShellSidebar class="pt-2">
        <Stack>
          <NavbarItem icon={mdiHome} title="Home" href="/" active />
          <NavbarItem icon={mdiHome} title="Item 1" href="#" />
          <NavbarItem icon={mdiHome} title="Item 2" href="#" />
          <NavbarItem icon={mdiHome} title="Item 3" href="#" />
        </Stack>
      </AppShellSidebar>

      <div class="p-4">
        {#if !selectionActive}
          <Button onclick={() => (selectionActive = true)}>Open control bar</Button>
        {/if}
      </div>
    </AppShell>
  </div>

  <div class="border">
    <AppShell class="h-[400px]">
      <AppShellBar>
        <ActionBar static closeIcon={mdiArrowLeft} onClose={() => {}} overflowActions={[ExampleActions.Delete]}>
          <ControlBarHeader>
            <ControlBarTitle>Mich's photos</ControlBarTitle>
          </ControlBarHeader>
        </ActionBar>
      </AppShellBar>

      <div class="p-2">
        <ImageCarousel items={carouselImageItems} />
      </div>
    </AppShell>
  </div>
</Stack>
