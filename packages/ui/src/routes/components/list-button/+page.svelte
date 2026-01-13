<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import BasicExample from './BasicExample.svelte';
  import basicExample from './BasicExample.svelte?raw';
  import SquaredExample from './SquaredExample.svelte';
  import squaredExample from './SquaredExample.svelte?raw';
</script>

<ComponentPage name="ListButton" description="A list button component that can be used in (multi) select scenarios.">
  <ComponentExamples
    examples={[
      { title: 'Basic', code: basicExample, component: BasicExample },
      { title: 'Squared', code: squaredExample, component: SquaredExample },
    ]}
  />
</ComponentPage>
