<script lang="ts">
	import { IconButton, HStack } from '@immich/ui';
	import { mdiMagnify } from '@mdi/js';

	const icon = mdiMagnify;
</script>

<HStack wrap>
	<IconButton {icon} variant="outline" color="primary" aria-label="Primary" />
	<IconButton {icon} variant="outline" color="secondary" aria-label="Secondary" />
	<IconButton {icon} variant="outline" color="success" aria-label="Success" />
	<IconButton {icon} variant="outline" color="info" aria-label="Info" />
	<IconButton {icon} variant="outline" color="warning" aria-label="Warning" />
	<IconButton {icon} variant="outline" color="danger" aria-label="Danger" />
</HStack>
