<script>
	import { IconButton, Input, Stack } from '@immich/ui';
	import { mdiClock } from '@mdi/js';
</script>

<Stack>
	<Input placeholder="Trailing text" trailingText="seconds" />
	<Input placeholder="Trailing icon with text" trailingIcon={mdiClock} trailingText="seconds" />
	<Input placeholder="Trailing icon button with text" trailingText="seconds">
		{#snippet trailingIcon()}
			<IconButton
				icon={mdiClock}
				shape="round"
				variant="ghost"
				color="secondary"
				aria-label="Search"
			/>
		{/snippet}
	</Input>
</Stack>
