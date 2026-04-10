<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import BasicExample from './BasicExample.svelte';
  import basicExample from './BasicExample.svelte?raw';
  import ExpandableExample from './ExpandableExample.svelte';
  import expandableExample from './ExpandableExample.svelte?raw';
  import SubtleExample from './SubtleExample.svelte';
  import subtleExample from './SubtleExample.svelte?raw';
</script>

<ComponentPage name="Card" description="An elevated container used to group related content">
  <ComponentExamples
    examples={[
      { title: 'Basic', code: basicExample, component: BasicExample },
      { title: 'Subtle', code: subtleExample, component: SubtleExample },
      { title: 'Expandable', code: expandableExample, component: ExpandableExample },
    ]}
  />
</ComponentPage>
