<script lang="ts">
	import { IconButton, HStack } from '@immich/ui';
	import { mdiMagnify } from '@mdi/js';

	const icon = mdiMagnify;
</script>

<HStack wrap>
	<IconButton {icon} variant="ghost" color="primary">Primary</IconButton>
	<IconButton {icon} variant="ghost" color="secondary">Secondary</IconButton>
	<IconButton {icon} variant="ghost" color="success">Success</IconButton>
	<IconButton {icon} variant="ghost" color="info">Info</IconButton>
	<IconButton {icon} variant="ghost" color="warning">Warning</IconButton>
	<IconButton {icon} variant="ghost" color="danger">Danger</IconButton>
</HStack>
