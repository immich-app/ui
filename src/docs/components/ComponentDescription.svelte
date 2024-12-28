<script lang="ts">
	import { Text } from '@immich/ui';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	const { children }: Props = $props();
</script>

<Text color="muted">{@render children()}</Text>
