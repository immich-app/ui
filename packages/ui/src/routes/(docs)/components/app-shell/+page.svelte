<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import BasicExample from './BasicExample.svelte';
  import basicExample from './BasicExample.svelte?raw';
  import ControlBarExample from './ControlBarExample.svelte';
  import controlBarExample from './ControlBarExample.svelte?raw';
  import SidebarExample from './SidebarExample.svelte';
  import sidebarExample from './SidebarExample.svelte?raw';
</script>

<ComponentPage
  name="AppShell"
  description="The AppShell component is a layout component that provides the basic skeleton for an application, including a
    header, sidebar and scrollable content view"
>
  <ComponentExamples
    examples={[
      { title: 'Basic', code: basicExample, component: BasicExample },
      { title: 'Sidebar', code: sidebarExample, component: SidebarExample },
      { title: 'ControlBar', code: controlBarExample, component: ControlBarExample },
    ]}
  />
</ComponentPage>
