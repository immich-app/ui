<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import BasicExample from './BasicExample.svelte';
  import basicExample from './BasicExample.svelte?raw';
  import ShapeExample from './ShapeExample.svelte';
  import shapeExample from './ShapeExample.svelte?raw';
  import SizeExample from './SizeExample.svelte';
  import sizeExample from './SizeExample.svelte?raw';
  import ValidationExample from './ValidationExample.svelte';
  import validationExample from './ValidationExample.svelte?raw';
</script>

<ComponentPage name="DatePicker">
  <ComponentExamples examples={[{ title: 'Basic', code: basicExample, component: BasicExample }]} />
  <ComponentExamples examples={[{ title: 'Size', code: sizeExample, component: SizeExample }]} />
  <ComponentExamples examples={[{ title: 'Validation', code: validationExample, component: ValidationExample }]} />
  <ComponentExamples examples={[{ title: 'Shape', code: shapeExample, component: ShapeExample }]} />
</ComponentPage>
