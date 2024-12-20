<script lang="ts">
	import { IconButton, HStack } from '@immich/ui';
	import { mdiMagnify } from '@mdi/js';

	const icon = mdiMagnify;
</script>

<HStack wrap>
	<IconButton {icon} variant="hero" color="primary">Primary</IconButton>
	<IconButton {icon} variant="hero" color="secondary">Secondary</IconButton>
	<IconButton {icon} variant="hero" color="success">Success</IconButton>
	<IconButton {icon} variant="hero" color="info">Info</IconButton>
	<IconButton {icon} variant="hero" color="warning">Warning</IconButton>
	<IconButton {icon} variant="hero" color="danger">Danger</IconButton>
</HStack>
