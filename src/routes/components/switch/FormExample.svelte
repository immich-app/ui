<script>
	import { Field, Stack, Switch, Text } from '@immich/ui';

	let form = $state({ status: false });
</script>

<Stack>
	<Field label="Support Immich">
		<Switch checked />
	</Field>
	<Field label="Example" description="A very descriptive description">
		<Switch checked />
	</Field>
	<Field label="Advanced features">
		<Switch />
	</Field>
	<Field label="Sell my privacy" disabled>
		<Switch />
	</Field>
	<Field label="Read-only" readOnly>
		<Switch checked />
	</Field>
	<Field label="Status">
		<Switch bind:checked={form.status} />
	</Field>
	<Text>Status Enabled: {form.status}</Text>
</Stack>
