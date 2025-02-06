<script lang="ts">
	import { IconButton, HStack } from '@immich/ui';
	import { mdiMagnify } from '@mdi/js';

	const icon = mdiMagnify;
</script>

<HStack wrap>
	<IconButton {icon} shape="rectangle" aria-label="Rectangle" />
	<IconButton {icon} shape="semi-round" aria-label="Semi-Round" />
	<IconButton {icon} shape="round" aria-label="Round" />
</HStack>
