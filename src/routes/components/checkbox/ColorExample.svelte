<script lang="ts">
	import { Checkbox, HStack, Stack } from '@immich/ui';
</script>

<Stack>
	<HStack>
		<Checkbox color="primary" checked />
		<Checkbox color="primary" />
		<Checkbox color="primary" indeterminate />
	</HStack>

	<HStack>
		<Checkbox color="secondary" checked />
		<Checkbox color="secondary" />
		<Checkbox color="secondary" indeterminate />
	</HStack>

	<HStack>
		<Checkbox color="success" checked />
		<Checkbox color="success" />
		<Checkbox color="success" indeterminate />
	</HStack>

	<HStack>
		<Checkbox color="info" checked />
		<Checkbox color="info" />
		<Checkbox color="info" indeterminate />
	</HStack>

	<HStack>
		<Checkbox color="warning" checked />
		<Checkbox color="warning" />
		<Checkbox color="warning" indeterminate />
	</HStack>

	<HStack>
		<Checkbox color="danger" checked />
		<Checkbox color="danger" />
		<Checkbox color="danger" indeterminate />
	</HStack>
</Stack>
