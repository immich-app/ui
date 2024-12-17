<script lang="ts">
	import { IconButton, HStack } from '@immich/ui';
	import { mdiMagnify } from '@mdi/js';

	const icon = mdiMagnify;
</script>

<HStack wrap>
	<IconButton {icon} disabled color="primary">Primary</IconButton>
	<IconButton {icon} disabled color="secondary">Secondary</IconButton>
	<IconButton {icon} disabled color="success">Success</IconButton>
	<IconButton {icon} disabled color="info">Info</IconButton>
	<IconButton {icon} disabled color="warning">Warning</IconButton>
	<IconButton {icon} disabled color="danger">Danger</IconButton>
</HStack>
