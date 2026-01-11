<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import BasicExample from './BasicExample.svelte';
  import basicExample from './BasicExample.svelte?raw';
  import ModalExample from './ModalExample.svelte';
  import modalExample from './ModalExample.svelte?raw';
</script>

<ComponentPage name="ContextMenu" description="A component for displaying context menus">
  <ComponentExamples
    examples={[
      { title: 'Basic', code: basicExample, component: BasicExample },
      { title: 'Modal', code: modalExample, component: ModalExample },
    ]}
  />
</ComponentPage>
