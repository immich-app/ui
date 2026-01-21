<script lang="ts">
  import Text from '$lib/components/Text/Text.svelte';
  import { ChildKey } from '$lib/constants.js';
  import Child from '$lib/internal/Child.svelte';
  import type { ChildData, TextColor } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';

  type Props = {
    color?: TextColor;
  } & ChildData;

  let { class: className, children, color = 'muted' }: Props = $props();
</script>

<Child for={ChildKey.Field} as={ChildKey.HelperText}>
  <Text {color} size="small" {children} class={cleanClass('pt-1', className)} />
</Child>
