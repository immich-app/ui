<script>
	import { Field, Stack, Switch, Text } from '@immich/ui';
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
</Stack>
