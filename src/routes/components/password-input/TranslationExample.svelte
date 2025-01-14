<script lang="ts">
	import { Field, PasswordInput, Stack } from '@immich/ui';
</script>

<Stack gap={4}>
	<Field label="Api Key">
		<PasswordInput
			value="super-secret-password"
			translations={{
				showPassword: 'Show Api key',
				hidePassword: 'Hide Api key',
			}}
		/>
	</Field>
</Stack>
