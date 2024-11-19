import { ChildKey } from '$lib/constants.js';
import { withPrefix } from '$lib/utils.js';
import { setContext, type Snippet } from 'svelte';
import { SvelteMap } from 'svelte/reactivity';

export const withChildrenSnippets = (key: ChildKey) => {
	const map = $state(new SvelteMap<ChildKey, Snippet>());

	setContext(withPrefix(key), {
		register: async (child: ChildKey, snippet: Snippet) => {
			if (map.has(child)) {
				console.warn(`Snippet with key ${child} already exists in the context`);
				return;
			}

			map.set(child, snippet);
		},
	});

	return {
		getChildren: (key: ChildKey) => map.get(key),
	};
};
