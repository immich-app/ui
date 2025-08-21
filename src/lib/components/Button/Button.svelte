<script lang="ts">
	import Button from '$lib/internal/Button.svelte';
	import type { ButtonProps } from '$lib/types.js';

	let { ref = $bindable(null), ...props }: ButtonProps = $props();
</script>

<Button bind:ref {...props} />
