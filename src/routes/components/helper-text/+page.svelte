<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentFieldCard from '$docs/components/ComponentFieldCard.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import BasicExample from './BasicExample.svelte';
  import basicExample from './BasicExample.svelte?raw';
</script>

<ComponentPage name="HelperText" description="A text note that is show below the form field">
  <ComponentFieldCard />
  <ComponentExamples examples={[{ title: 'Basic', code: basicExample, component: BasicExample }]} />
</ComponentPage>
