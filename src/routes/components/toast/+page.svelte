<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import CustomExample from './CustomExample.svelte';
  import customExample from './CustomExample.svelte?raw';
  import BasicExample from './BasicExample.svelte';
  import basicExample from './BasicExample.svelte?raw';
  import ColorExample from './ColorExample.svelte';
  import colorExample from './ColorExample.svelte?raw';
  import ManagerExample from './ManagerExample.svelte';
  import managerExample from './ManagerExample.svelte?raw';
  import ShapeExample from './ShapeExample.svelte';
  import shapeExample from './ShapeExample.svelte?raw';
  import SizeExample from './SizeExample.svelte';
  import sizeExample from './SizeExample.svelte?raw';
</script>

<ComponentPage name="Toast" description="A component to display brief messages to the user">
  <ComponentExamples
    examples={[
      { title: 'Manager', code: managerExample, component: ManagerExample },
      { title: 'Basic', code: basicExample, component: BasicExample },
      { title: 'Color', code: colorExample, component: ColorExample },
      { title: 'Size', code: sizeExample, component: SizeExample },
      { title: 'Shape', code: shapeExample, component: ShapeExample },
      { title: 'Custom', code: customExample, component: CustomExample },
    ]}
  />
</ComponentPage>
