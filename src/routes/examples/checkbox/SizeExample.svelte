<script lang="ts">
	import HStack from '$lib/components/Stack/HStack.svelte';
	import { Checkbox, Stack } from '@immich/ui';
</script>

<Stack>
	<HStack>
		<Checkbox size="tiny" checked />
		<Checkbox size="tiny" />
		<Checkbox size="tiny" indeterminate />
	</HStack>

	<HStack>
		<Checkbox size="small" checked />
		<Checkbox size="small" />
		<Checkbox size="small" indeterminate />
	</HStack>

	<HStack>
		<Checkbox size="medium" checked />
		<Checkbox size="medium" />
		<Checkbox size="medium" indeterminate />
	</HStack>

	<HStack>
		<Checkbox size="large" checked />
		<Checkbox size="large" />
		<Checkbox size="large" indeterminate />
	</HStack>

	<HStack>
		<Checkbox size="giant" checked />
		<Checkbox size="giant" />
		<Checkbox size="giant" indeterminate />
	</HStack>
</Stack>
