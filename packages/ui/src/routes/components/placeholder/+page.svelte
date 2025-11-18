<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import BasicExample from './BasicExample.svelte';
  import basicExample from './BasicExample.svelte?raw';
  import ButtonExample from './ButtonExample.svelte';
  import buttonExample from './ButtonExample.svelte?raw';
</script>

<ComponentPage name="Placeholder">
  <ComponentExamples
    examples={[
      { title: 'Basic', code: basicExample, component: BasicExample },
      { title: 'Button', code: buttonExample, component: ButtonExample },
    ]}
  />
</ComponentPage>
