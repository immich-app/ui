<script lang="ts">
	import Heading from '$lib/components/Heading/Heading.svelte';
	import HStack from '$lib/components/Stack/HStack.svelte';
	import { Checkbox, Stack } from '@immich/ui';
</script>

<Stack>
	<Heading size="tiny">Semi-Round</Heading>
	<HStack>
		<Checkbox checked />
		<Checkbox />
		<Checkbox indeterminate />
	</HStack>

	<Heading size="tiny">Round</Heading>
	<HStack>
		<Checkbox checked />
		<Checkbox />
		<Checkbox indeterminate />
	</HStack>

	<Heading size="tiny">Rectangle</Heading>
	<HStack>
		<Checkbox shape="rectangle" checked />
		<Checkbox shape="rectangle" />
		<Checkbox shape="rectangle" indeterminate />
	</HStack>
</Stack>
