<script lang="ts">
	import { IconButton, HStack } from '@immich/ui';
	import { mdiMagnify } from '@mdi/js';

	const icon = mdiMagnify;
</script>

<HStack wrap>
	<IconButton {icon} color="primary" aria-label="Primary" />
	<IconButton {icon} color="secondary" aria-label="Secondary" />
	<IconButton {icon} color="success" aria-label="Success" />
	<IconButton {icon} color="info" aria-label="Info" />
	<IconButton {icon} color="warning" aria-label="Warning" />
	<IconButton {icon} color="danger" aria-label="Danger" />
</HStack>
