<script lang="ts">
	import { IconButton, HStack } from '@immich/ui';
	import { mdiMagnify } from '@mdi/js';

	const icon = mdiMagnify;
</script>

<HStack wrap>
	<IconButton {icon} shape="rectangle">Rectangle</IconButton>
	<IconButton {icon} shape="semi-round">Semi-Round</IconButton>
	<IconButton {icon} shape="round">Round</IconButton>
</HStack>
