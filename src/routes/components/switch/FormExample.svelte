<script>
	import { Field, Stack, Switch, Text } from '@immich/ui';

	let { form = $bindable({ status: false }) } = $props();
</script>

<Stack>
	<Field label="Support Immich">
		<Switch class="flex justify-between" checked />
	</Field>
	<Field label="Advanced features">
		<Switch class="flex justify-between" />
	</Field>
	<Field label="Sell my privacy" disabled>
		<Switch class="flex justify-between">
			<Text>Disabled</Text>
		</Switch>
	</Field>

	<Field label="Status">
		<Switch bind:checked={form.status} class="flex justify-between">
			<Text>Status</Text>
		</Switch>
	</Field>
	<Text>Status Enabled: {form.status}</Text>
</Stack>
