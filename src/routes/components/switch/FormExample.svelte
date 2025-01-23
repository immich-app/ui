<script>
	import { Field, Stack, Switch, Text } from '@immich/ui';

	let form = $state({ status: false });
</script>

<Stack>
	<Field label="Support Immich">
		<Switch checked />
	</Field>
	<Field label="Advanced features">
		<Switch />
	</Field>
	<Field label="Sell my privacy" disabled>
		<Switch>
			<Text>Disabled</Text>
		</Switch>
	</Field>

	<Field label="Status">
		<Switch bind:checked={form.status}>
			<Text>Status</Text>
		</Switch>
	</Field>
	<Text>Status Enabled: {form.status}</Text>
</Stack>
