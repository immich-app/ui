<script lang="ts">
	import { IconButton, HStack } from '@immich/ui';
	import { mdiMagnify } from '@mdi/js';

	const icon = mdiMagnify;
</script>

<HStack wrap>
	<IconButton {icon} disabled color="primary" aria-label="Primary" />
	<IconButton {icon} disabled color="secondary" aria-label="Secondary" />
	<IconButton {icon} disabled color="success" aria-label="Success" />
	<IconButton {icon} disabled color="info" aria-label="Info" />
	<IconButton {icon} disabled color="warning" aria-label="Warning" />
	<IconButton {icon} disabled color="danger" aria-label="Danger" />
</HStack>
