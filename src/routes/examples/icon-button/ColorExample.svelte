<script lang="ts">
	import { IconButton, HStack } from '@immich/ui';
	import { mdiMagnify } from '@mdi/js';

	const icon = mdiMagnify;
</script>

<HStack wrap>
	<IconButton {icon} color="primary">Primary</IconButton>
	<IconButton {icon} color="secondary">Secondary</IconButton>
	<IconButton {icon} color="success">Success</IconButton>
	<IconButton {icon} color="info">Info</IconButton>
	<IconButton {icon} color="warning">Warning</IconButton>
	<IconButton {icon} color="danger">Danger</IconButton>
</HStack>
