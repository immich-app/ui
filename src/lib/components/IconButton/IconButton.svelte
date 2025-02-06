<script lang="ts">
	import Button from '$lib/internal/Button.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import type { IconButtonProps } from '$lib/types.js';

	const {
		icon,
		flipped,
		flopped,
		title,
		'aria-label': ariaLabel,
		...buttonProps
	}: IconButtonProps = $props();

	const buttonTitle = title || ariaLabel;
</script>

<Button icon {...buttonProps} title={buttonTitle} aria-label={ariaLabel}>
	<Icon {icon} {flipped} {flopped} size="45%" aria-hidden />
</Button>
