<script lang="ts">
	import { Stack, Field, PasswordInput } from '@immich/ui';
</script>

<Stack gap={4}>
	<Field label="Empty">
		<PasswordInput />
	</Field>
	<Field label="Password">
		<PasswordInput value="super-secret-password" />
	</Field>
</Stack>
