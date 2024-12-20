<script lang="ts">
	import { IconButton, HStack } from '@immich/ui';
	import { mdiMagnify } from '@mdi/js';

	const icon = mdiMagnify;
</script>

<HStack wrap>
	<IconButton {icon} variant="outline" color="primary">Primary</IconButton>
	<IconButton {icon} variant="outline" color="secondary">Secondary</IconButton>
	<IconButton {icon} variant="outline" color="success">Success</IconButton>
	<IconButton {icon} variant="outline" color="info">Info</IconButton>
	<IconButton {icon} variant="outline" color="warning">Warning</IconButton>
	<IconButton {icon} variant="outline" color="danger">Danger</IconButton>
</HStack>
