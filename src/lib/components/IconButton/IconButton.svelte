<script lang="ts">
	import Button from '$lib/internal/Button.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import type { IconButtonProps } from '$lib/types.js';

	const { icon, flipped, flopped, ...buttonProps }: IconButtonProps = $props();
</script>

<Button icon {...buttonProps}>
	<Icon {icon} {flipped} {flopped} size="45%"></Icon>
</Button>
