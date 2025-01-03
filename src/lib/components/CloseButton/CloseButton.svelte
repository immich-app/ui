<script lang="ts">
	import IconButton from '$lib/components/IconButton/IconButton.svelte';
	import type { CloseButtonProps } from '$lib/types.js';
	import { mdiClose } from '@mdi/js';

	const { size = 'medium', variant = 'ghost', ...restProps }: CloseButtonProps = $props();
</script>

<IconButton {...restProps} icon={mdiClose} shape="round" {variant} {size} color="secondary" />
