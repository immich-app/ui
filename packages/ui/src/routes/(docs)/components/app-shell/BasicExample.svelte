<script lang="ts">
  import { AppShell, AppShellHeader, AppShellSidebar, Heading, Stack } from '@immich/ui';
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
</Stack>
