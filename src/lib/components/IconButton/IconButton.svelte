<script lang="ts">
	import Icon from '$lib/components/Icon/Icon.svelte';
	import Button from '$lib/internal/Button.svelte';
	import type { IconButtonProps } from '$lib/types.js';

	const {
		icon,
		iconSize = '60%',
		flipped,
		flopped,
		title,
		'aria-label': ariaLabel,
		...buttonProps
	}: IconButtonProps = $props();

	const buttonTitle = $derived(title || ariaLabel);
</script>

<Button icon {...buttonProps} title={buttonTitle} aria-label={ariaLabel}>
	<Icon {icon} {flipped} {flopped} size={iconSize} aria-hidden />
</Button>
