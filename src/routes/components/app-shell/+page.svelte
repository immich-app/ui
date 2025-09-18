<script lang="ts">
  import ComponentDescription from '$docs/components/ComponentDescription.svelte';
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import BasicExample from './BasicExample.svelte';
  import basicExample from './BasicExample.svelte?raw';
</script>

<ComponentPage name="AppShell">
  <ComponentDescription
    >The AppShell component is a layout component that provides the basic skeleton for an application, including a
    header, sidebar and scrollable content view</ComponentDescription
  >
  <ComponentExamples examples={[{ title: 'Basic', code: basicExample, component: BasicExample }]} />
</ComponentPage>
