<script lang="ts">
	import { Heading, HStack, IconButton, Stack } from '@immich/ui';
	import { mdiMagnify } from '@mdi/js';

	const icon = mdiMagnify;
</script>

<HStack gap={4}>
	<Stack>
		<Heading size="tiny">Semi-Round</Heading>
		<div>
			<IconButton {icon} size="tiny" aria-label="Tiny" />
		</div>
		<div>
			<IconButton {icon} size="small" aria-label="Small" />
		</div>
		<div>
			<IconButton {icon} size="medium" aria-label="Medium" />
		</div>
		<div>
			<IconButton {icon} size="large" aria-label="Large" />
		</div>
		<div>
			<IconButton {icon} size="giant" aria-label="Giant" />
		</div>
	</Stack>

	<Stack>
		<Heading size="tiny">Round</Heading>
		<div>
			<IconButton {icon} shape="round" size="tiny" aria-label="Tiny" />
		</div>
		<div>
			<IconButton {icon} shape="round" size="small" aria-label="Small" />
		</div>
		<div>
			<IconButton {icon} shape="round" size="medium" aria-label="Medium" />
		</div>
		<div>
			<IconButton {icon} shape="round" size="large" aria-label="Large" />
		</div>
		<div>
			<IconButton {icon} shape="round" size="giant" aria-label="Giant" />
		</div>
	</Stack>

	<Stack>
		<Heading size="tiny">Rectangle</Heading>
		<div>
			<IconButton {icon} shape="rectangle" size="tiny" aria-label="Tiny" />
		</div>
		<div>
			<IconButton {icon} shape="rectangle" size="small" aria-label="Small" />
		</div>
		<div>
			<IconButton {icon} shape="rectangle" size="medium" aria-label="Medium" />
		</div>
		<div>
			<IconButton {icon} shape="rectangle" size="large" aria-label="Large" />
		</div>
		<div>
			<IconButton {icon} shape="rectangle" size="giant" aria-label="Giant" />
		</div>
	</Stack>
</HStack>
