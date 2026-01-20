<script lang="ts">
  import { exampleActions } from '$docs/constants.js';
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
    NavbarItem,
    Stack,
  } from '@immich/ui';
  import { mdiHome } from '@mdi/js';

  let open = $state(true);

  let selectionActive = $state(false);
</script>

<Stack>
  <div class="border">
    <AppShell class="h-[400px]">
      <AppShellHeader>
        <div class="flex h-full items-center p-4">
          <Heading size="tiny">Header</Heading>
        </div>
      </AppShellHeader>

      <div class="p-4">
        <Heading size="tiny">Content</Heading>
      </div>
    </AppShell>
  </div>

  <div class="border">
    <AppShell class="h-[400px]">
      <AppShellHeader>
        <div class="p-4">
          <Heading size="tiny">Header</Heading>
        </div>
      </AppShellHeader>

      <AppShellSidebar>
        <div class="p-4">
          <Heading size="tiny">Sidebar</Heading>
        </div>
      </AppShellSidebar>

      <div class="p-4">
        <Heading size="tiny">Content</Heading>
      </div>
    </AppShell>
  </div>

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

      <AppShellSidebar class="pt-2" bind:open>
        <Stack>
          <NavbarItem icon={mdiHome} title="Home" href="/" active />
          <NavbarItem icon={mdiHome} title="Item 1" href="#" />
          <NavbarItem icon={mdiHome} title="Item 2" href="#" />
          <NavbarItem icon={mdiHome} title="Item 3" href="#" />
        </Stack>
      </AppShellSidebar>

      <div class="flex gap-2 p-4">
        <Button onclick={() => (open = !open)}>Toggle Sidebar</Button>
        {#if !selectionActive}
          <Button onclick={() => (selectionActive = true)}>Open control bar</Button>
        {/if}
      </div>
    </AppShell>
  </div>
</Stack>
