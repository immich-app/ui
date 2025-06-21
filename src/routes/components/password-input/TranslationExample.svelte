<script lang="ts">
	import { Field, PasswordInput, Stack } from '@immich/ui';
</script>

<Stack gap={4}>
	<Field label="Api Key">
		<PasswordInput
			value="super-secret-password"
			translations={{
				show_password: 'Show Api key',
				hide_password: 'Hide Api key',
			}}
		/>
	</Field>
</Stack>
