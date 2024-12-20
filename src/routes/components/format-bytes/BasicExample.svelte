<script lang="ts">
	import { FormatBytes, Stack } from '@immich/ui';
</script>

<Stack>
	<FormatBytes bytes={50} />
	<FormatBytes bytes={500} />
	<FormatBytes bytes={5000} />
	<FormatBytes bytes={50000} />
	<FormatBytes bytes={500000} />
	<FormatBytes bytes={5000000} />
</Stack>
