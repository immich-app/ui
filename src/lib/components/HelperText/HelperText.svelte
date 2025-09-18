<script lang="ts">
  import Text from '$lib/components/Text/Text.svelte';
  import { ChildKey } from '$lib/constants.js';
  import Child from '$lib/internal/Child.svelte';
  import type { TextColor } from '$lib/types.js';
  import { cleanClass } from '$lib/utils.js';
  import type { Snippet } from 'svelte';

  type Props = {
    color?: TextColor;
    class?: string;
    children?: Snippet;
  };

  let { class: className, children, color = 'muted' }: Props = $props();
</script>

<Child for={ChildKey.Field} as={ChildKey.HelperText}>
  <div class={cleanClass(className)}>
    <Text {color} size="small">
      {@render children?.()}
    </Text>
  </div>
</Child>
