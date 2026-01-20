<script lang="ts">
  import { ChildKey } from '$lib/constants.js';
  import type { ContextType } from '$lib/types.js';
  import { withPrefix } from '$lib/utilities/internal.js';
  import { getContext, onDestroy, type Snippet } from 'svelte';

  type Props = {
    for: ChildKey;
    as: ChildKey;
    class?: string;
    children: Snippet;
    props?: unknown;
  };

  const { for: key, as, children, class: className, props = {} }: Props = $props();

  const context = getContext<ContextType>(withPrefix(key));

  const data = $derived({ snippet: children, class: className, props });

  if (context) {
    context.register(as, () => data);
  } else {
    console.log('Unable to find context for key:', key);
  }

  onDestroy(() => {
    context?.unregister(as);
  });
</script>
