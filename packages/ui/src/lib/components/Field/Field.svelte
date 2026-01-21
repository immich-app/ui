<script lang="ts">
  import { setChildContext, setFieldContext } from '$lib/common/context.svelte.js';
  import { ChildKey } from '$lib/constants.js';
  import type { FieldContext } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import { type Snippet } from 'svelte';

  type Props = FieldContext & {
    class?: string;
    children: Snippet;
  };

  const { class: className, children, ...props }: Props = $props();

  const state = $derived(props);

  setFieldContext(() => state);

  const { getByKey } = setChildContext(ChildKey.Field);
  const helperTextChild = $derived(getByKey(ChildKey.HelperText));
</script>

<div class={cleanClass('w-full', className)}>
  {@render children()}
  {@render helperTextChild?.children?.()}
</div>
