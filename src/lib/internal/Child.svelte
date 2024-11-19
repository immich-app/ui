<script lang="ts">
	import { ChildKey } from '$lib/constants.js';
	import { withPrefix } from '$lib/utils.js';
	import { getContext, type Snippet } from 'svelte';

	type ContextType = { register: (key: ChildKey, snippet: Snippet) => void };
	type Props = {
		for: ChildKey;
		as: ChildKey;
		children: Snippet;
	};

	const { for: key, as, children }: Props = $props();

	const context = getContext<ContextType>(withPrefix(key));
	if (context) {
		context.register(as, children);
	} else {
		console.log('Unable to find context for key:', key);
	}
</script>
