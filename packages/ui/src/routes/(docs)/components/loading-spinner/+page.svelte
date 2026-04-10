<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import ColorExample from './ColorExample.svelte';
  import colorExample from './ColorExample.svelte?raw';
  import SizeExample from './SizeExample.svelte';
  import sizeExample from './SizeExample.svelte?raw';
</script>

<ComponentPage
  name="LoadingSpinner"
  description="A component to display a spinner while waiting for an action to complete"
>
  <ComponentExamples
    examples={[
      { title: 'Sizes', code: sizeExample, component: SizeExample },
      { title: 'Color', code: colorExample, component: ColorExample },
    ]}
  />
</ComponentPage>
