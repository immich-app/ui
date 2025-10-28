<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentFieldCard from '$docs/components/ComponentFieldCard.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import BasicExample from './BasicExample.svelte';
  import basicExample from './BasicExample.svelte?raw';
  import ShapeExample from './ShapeExample.svelte';
  import shapeExample from './ShapeExample.svelte?raw';
  import SizeExample from './SizeExample.svelte';
  import sizeExample from './SizeExample.svelte?raw';
  import TranslationExample from './TranslationExample.svelte';
  import translationExample from './TranslationExample.svelte?raw';
</script>

<ComponentPage name="PasswordInput" description="Accept masked input from the user">
  <ComponentFieldCard />
  <ComponentExamples
    examples={[
      { title: 'States', code: basicExample, component: BasicExample },
      { title: 'Shapes', code: shapeExample, component: ShapeExample },
      { title: 'Sizes', code: sizeExample, component: SizeExample },
      { title: 'Translation', code: translationExample, component: TranslationExample },
    ]}
  />
</ComponentPage>
