<script lang="ts">
	import { Alert, Button, Stack } from '@immich/ui';

	let count = $state(0);
	let open = $state(true);

	const handleClose = () => (open = false);
	const handleReset = () => {
		open = true;
		count++;
	};
</script>

<Stack>
	{#key count}
		<Alert title="This is a closable alert" closable />
		<Alert title="This alert disappears automatically" duration={2000} />
		<Alert title="This alert disappears automatically and is closable" duration={2000} closable />
		{#if open}
			<Alert title="This is a controlled alert" controlled onClose={handleClose} />
		{/if}
	{/key}

	<div>
		<Button onclick={handleReset}>Reset</Button>
	</div>
</Stack>
