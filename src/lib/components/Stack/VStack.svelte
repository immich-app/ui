<script lang="ts">
	import Stack from '$lib/components/Stack/Stack.svelte';
	import type { VStackProps } from '$lib/types.js';

	const { class: className, children, ...props }: VStackProps = $props();
</script>

<Stack direction="column" align="center" class={className} {...props}>
	{@render children()}
</Stack>
