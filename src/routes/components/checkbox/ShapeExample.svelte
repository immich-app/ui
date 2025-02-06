<script lang="ts">
	import { Checkbox, Heading, HStack, Stack } from '@immich/ui';
</script>

<Stack>
	<Heading tag="p" size="tiny">Semi-Round</Heading>
	<HStack>
		<Checkbox checked />
		<Checkbox />
		<Checkbox indeterminate />
	</HStack>

	<Heading tag="p" size="tiny">Round</Heading>
	<HStack>
		<Checkbox checked />
		<Checkbox />
		<Checkbox indeterminate />
	</HStack>

	<Heading tag="p" size="tiny">Rectangle</Heading>
	<HStack>
		<Checkbox shape="rectangle" checked />
		<Checkbox shape="rectangle" />
		<Checkbox shape="rectangle" indeterminate />
	</HStack>
</Stack>
