<script lang="ts">
  import ComponentDescription from '$docs/components/ComponentDescription.svelte';
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentFieldCard from '$docs/components/ComponentFieldCard.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import BasicExample from './BasicExample.svelte';
  import basicExample from './BasicExample.svelte?raw';
</script>

<ComponentPage name="HelperText">
  <ComponentDescription>A text note that is show below the form field</ComponentDescription>
  <ComponentFieldCard />
  <ComponentExamples examples={[{ title: 'Basic', code: basicExample, component: BasicExample }]} />
</ComponentPage>
