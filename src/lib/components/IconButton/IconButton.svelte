<script lang="ts">
	import InternalButton from '$lib/internal/InternalButton.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import type { IconButtonProps } from '$lib/types.js';

	const { icon, flipped, flopped, ...buttonProps }: IconButtonProps = $props();
</script>

<InternalButton icon {...buttonProps}>
	<Icon {icon} {flipped} {flopped} size="66%"></Icon>
</InternalButton>
