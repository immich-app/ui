<script lang="ts">
	import { Heading, HStack, IconButton, Stack } from '@immich/ui';
	import { mdiMagnify } from '@mdi/js';

	const icon = mdiMagnify;
</script>

<HStack gap={4}>
	<Stack>
		<Heading size="tiny">Semi-Round</Heading>
		<div>
			<IconButton {icon} size="tiny">Tiny</IconButton>
		</div>
		<div>
			<IconButton {icon} size="small">Small</IconButton>
		</div>
		<div>
			<IconButton {icon} size="medium">Medium</IconButton>
		</div>
		<div>
			<IconButton {icon} size="large">Large</IconButton>
		</div>
		<div>
			<IconButton {icon} size="giant">Giant</IconButton>
		</div>
	</Stack>

	<Stack>
		<Heading size="tiny">Round</Heading>
		<div>
			<IconButton {icon} shape="round" size="tiny">Tiny</IconButton>
		</div>
		<div>
			<IconButton {icon} shape="round" size="small">Small</IconButton>
		</div>
		<div>
			<IconButton {icon} shape="round" size="medium">Medium</IconButton>
		</div>
		<div>
			<IconButton {icon} shape="round" size="large">Large</IconButton>
		</div>
		<div>
			<IconButton {icon} shape="round" size="giant">Giant</IconButton>
		</div>
	</Stack>

	<Stack>
		<Heading size="tiny">Rectangle</Heading>
		<div>
			<IconButton {icon} shape="rectangle" size="tiny">Tiny</IconButton>
		</div>
		<div>
			<IconButton {icon} shape="rectangle" size="small">Small</IconButton>
		</div>
		<div>
			<IconButton {icon} shape="rectangle" size="medium">Medium</IconButton>
		</div>
		<div>
			<IconButton {icon} shape="rectangle" size="large">Large</IconButton>
		</div>
		<div>
			<IconButton {icon} shape="rectangle" size="giant">Giant</IconButton>
		</div>
	</Stack>
</HStack>
