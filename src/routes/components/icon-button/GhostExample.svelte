<script lang="ts">
	import { IconButton, HStack } from '@immich/ui';
	import { mdiMagnify } from '@mdi/js';

	const icon = mdiMagnify;
</script>

<HStack wrap>
	<IconButton {icon} variant="ghost" color="primary" aria-label="Primary" />
	<IconButton {icon} variant="ghost" color="secondary" aria-label="Secondary" />
	<IconButton {icon} variant="ghost" color="success" aria-label="Success" />
	<IconButton {icon} variant="ghost" color="info" aria-label="Info" />
	<IconButton {icon} variant="ghost" color="warning" aria-label="Warning" />
	<IconButton {icon} variant="ghost" color="danger" aria-label="Danger" />
</HStack>
