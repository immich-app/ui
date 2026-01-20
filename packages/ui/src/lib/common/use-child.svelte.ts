import { ChildKey } from '$lib/constants.js';
import { type ChildData, type ContextType } from '$lib/types.js';
import { withPrefix } from '$lib/utilities/internal.js';
import { setContext } from 'svelte';
import { SvelteMap } from 'svelte/reactivity';

export const withChildrenSnippets = (key: ChildKey) => {
  const map = new SvelteMap<ChildKey, () => ChildData>();

  setContext<ContextType>(withPrefix(key), {
    register: (child: ChildKey, data: () => ChildData) => map.set(child, data),
    unregister: (child: ChildKey) => map.delete(child),
  });

  return {
    getChildren: <T>(key: ChildKey) => map.get(key)?.() as ChildData<T> | undefined,
  };
};
