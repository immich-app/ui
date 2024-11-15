<script lang="ts">
	import InternalButton from '$lib/internal/InternalButton.svelte';
	import type { ButtonProps } from '$lib/types.js';

	const props: ButtonProps = $props();
</script>

<InternalButton {...props} />
