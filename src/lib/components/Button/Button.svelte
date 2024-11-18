<script lang="ts">
	import Button from '$lib/internal/Button.svelte';
	import type { ButtonProps } from '$lib/types.js';

	const props: ButtonProps = $props();
</script>

<Button {...props} />
