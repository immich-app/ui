<script lang="ts">
	import InternalButton from '$lib/internal/InternalButton.svelte';
	import { Icon } from '$lib/components/index.js';
	import type { IconButtonProps } from '$lib/types.js';

	const { icon, ...buttonProps }: IconButtonProps = $props();
</script>

<InternalButton icon {...buttonProps}>
	<Icon path={icon}></Icon>
</InternalButton>
