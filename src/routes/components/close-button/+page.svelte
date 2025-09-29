<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import BasicExample from './BasicExample.svelte';
  import basicExample from './BasicExample.svelte?raw';
  import FilledExample from './FilledExample.svelte';
  import filledExample from './FilledExample.svelte?raw';
  import OutlineExample from './OutlineExample.svelte';
  import outlineExample from './OutlineExample.svelte?raw';
  import TranslationExample from './TranslationExample.svelte';
  import translationExample from './TranslationExample.svelte?raw';
</script>

<ComponentPage name="CloseButton" description="A button component for closing modals or dismissing content">
  <ComponentExamples
    examples={[
      { title: 'Basic', code: basicExample, component: BasicExample },
      { title: 'Outline', code: outlineExample, component: OutlineExample },
      { title: 'Filled', code: filledExample, component: FilledExample },
      { title: 'Translation', code: translationExample, component: TranslationExample },
    ]}
  />
</ComponentPage>
