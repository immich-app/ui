<script lang="ts">
	import { Button, CloseButton } from '@immich/ui';

	let isOpen = $state(true);
	const handleToggle = () => (isOpen = !isOpen);
</script>

{#if isOpen}
	<CloseButton onclick={handleToggle} />
{:else}
	<Button variant="ghost" shape="round" onclick={handleToggle}>Reset</Button>
{/if}
