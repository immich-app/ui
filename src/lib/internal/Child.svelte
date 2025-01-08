<script lang="ts">
	import { ChildKey } from '$lib/constants.js';
	import type { ChildData } from '$lib/types.js';
	import { withPrefix } from '$lib/utils.js';
	import { getContext, type Snippet } from 'svelte';

	type ContextType = {
		register: (key: ChildKey, data: () => ChildData) => void;
	};
	type Props = {
		for: ChildKey;
		as: ChildKey;
		class?: string;
		children: Snippet;
	};

	const { for: key, as, children, class: className }: Props = $props();

	const context = getContext<ContextType>(withPrefix(key));

	const data = $derived({ snippet: children, class: className });

	if (context) {
		context.register(as, () => data);
	} else {
		console.log('Unable to find context for key:', key);
	}
</script>
