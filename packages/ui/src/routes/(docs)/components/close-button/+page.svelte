<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import BasicExample from './BasicExample.svelte';
  import basicExample from './BasicExample.svelte?raw';
  import ColorExample from './ColorExample.svelte';
  import colorExample from './ColorExample.svelte?raw';
  import TranslationExample from './TranslationExample.svelte';
  import translationExample from './TranslationExample.svelte?raw';
</script>

<ComponentPage name="CloseButton" description="A button component for closing modals or dismissing content">
  <ComponentExamples
    examples={[
      { title: 'Basic', code: basicExample, component: BasicExample },
      { title: 'Colors', code: colorExample, component: ColorExample },
      { title: 'Translation', code: translationExample, component: TranslationExample },
    ]}
  />
</ComponentPage>
