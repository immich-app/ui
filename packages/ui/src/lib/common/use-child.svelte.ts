import { ChildKey } from '$lib/constants.js';
import type { ChildData } from '$lib/types.js';
import { withPrefix } from '$lib/utilities/internal.js';
import { setContext } from 'svelte';
import { SvelteMap } from 'svelte/reactivity';

export const withChildrenSnippets = (key: ChildKey) => {
  const map = new SvelteMap<ChildKey, () => ChildData>();

  setContext(withPrefix(key), {
    register: (child: ChildKey, data: () => ChildData) => map.set(child, data),
  });

  return {
    getChildren: (key: ChildKey) => map.get(key)?.(),
  };
};
