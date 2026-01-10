<script lang="ts">
  import ComponentExamples from '$docs/components/ComponentExamples.svelte';
  import ComponentFieldCard from '$docs/components/ComponentFieldCard.svelte';
  import ComponentLink from '$docs/components/ComponentLink.svelte';
  import ComponentPage from '$docs/components/ComponentPage.svelte';
  import ComponentTipCard from '$docs/components/ComponentTipCard.svelte';
  import { Text } from '@immich/ui';
  import FormExample from './FormExample.svelte';
  import formExample from './FormExample.svelte?raw';
  import GrowExample from './GrowExample.svelte';
  import growExample from './GrowExample.svelte?raw';
  import SizeExample from './SizeExample.svelte';
  import sizeExample from './SizeExample.svelte?raw';
</script>

<ComponentPage name="Textarea" description="A multi-line text input field with auto grow/shrink functionality">
  <ComponentFieldCard />
  <ComponentTipCard>
    <Text>See <ComponentLink name="Input" /> for single-line input fields</Text>
  </ComponentTipCard>
  <ComponentExamples
    examples={[
      { title: 'Form', code: formExample, component: FormExample },
      { title: 'Size', code: sizeExample, component: SizeExample },
      { title: 'Auto Grow/Shrink', code: growExample, component: GrowExample },
    ]}
  />
</ComponentPage>
