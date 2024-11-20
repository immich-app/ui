<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import { sizes } from '$docs/constants.js';
	import { Card, CardBody, CardHeader, CardTitle, Field, PasswordInput, Stack } from '@immich/ui';

	const value = 'super-secret-password';
</script>

<DualThemeLayout name="PasswordInput">
	{#snippet component()}
		<Card>
			<CardHeader>
				<CardTitle>States</CardTitle>
			</CardHeader>
			<CardBody>
				<Stack gap={4}>
					<Field label="Empty">
						<PasswordInput />
					</Field>
					<Field label="Password">
						<PasswordInput {value} />
					</Field>
				</Stack>
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Shapes</CardTitle>
			</CardHeader>
			<CardBody>
				<Stack>
					<PasswordInput {value} placeholder="Round" shape="round"></PasswordInput>
					<PasswordInput {value} placeholder="Semi-Round" shape="semi-round"></PasswordInput>
					<PasswordInput {value} placeholder="Rectangle" shape="rectangle"></PasswordInput>
				</Stack>
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Sizes</CardTitle>
			</CardHeader>
			<CardBody>
				<Stack>
					{#each sizes as size}
						<PasswordInput {value} placeholder={size} {size}></PasswordInput>
					{/each}
				</Stack>
			</CardBody>
		</Card>
	{/snippet}
</DualThemeLayout>
