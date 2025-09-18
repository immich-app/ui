<script lang="ts">
  import ComponentDescription from '$docs/components/ComponentDescription.svelte';
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentFieldCard from '$docs/components/ComponentFieldCard.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import BasicExample from './BasicExample.svelte';
  import basicExample from './BasicExample.svelte?raw';
  import ColorExample from './ColorExample.svelte';
  import colorExample from './ColorExample.svelte?raw';
  import FormExample from './FormExample.svelte';
  import formExample from './FormExample.svelte?raw';
</script>

<ComponentPage name="Switch">
  <ComponentDescription>A boolean input element</ComponentDescription>
  <ComponentFieldCard />
  <ComponentExamples
    examples={[
      { title: 'Basic', code: basicExample, component: BasicExample },
      { title: 'Color', code: colorExample, component: ColorExample },
      { title: 'Form', code: formExample, component: FormExample },
    ]}
  />
</ComponentPage>
