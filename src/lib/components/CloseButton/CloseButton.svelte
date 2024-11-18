<script lang="ts">
	import IconButton from '$lib/components/IconButton/IconButton.svelte';
	import type { CloseButtonProps } from '$lib/types.js';
	import { mdiClose } from '@mdi/js';

	const { size = 'medium', variant = 'ghost' }: CloseButtonProps = $props();
</script>

<IconButton icon={mdiClose} color="secondary" shape="round" {variant} {size} />
