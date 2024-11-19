<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import { sizes } from '$docs/constants.js';
	import {
		Card,
		CardBody,
		CardHeader,
		CardTitle,
		Field,
		HelperText,
		Input,
		Stack,
	} from '@immich/ui';
</script>

<DualThemeLayout name="Input">
	{#snippet component()}
		<Card>
			<CardHeader>
				<CardTitle>States</CardTitle>
			</CardHeader>
			<CardBody>
				<Stack gap={4}>
					<Field label="Label">
						<Input placeholder="label" />
					</Field>
					<Field label="Disabled" disabled>
						<Input placeholder="label" />
					</Field>
					<Field label="Instance URL">
						<Input placeholder="label" value="https://immich.app" />
					</Field>
					<Field label="Read-only" readOnly>
						<Input placeholder="label" value="https://immich.app" />
					</Field>
					<Field label="Helper text">
						<Input placeholder="label" />
						<HelperText>Note: this is helper text</HelperText>
					</Field>
					<Field label="Invalid" invalid>
						<Input placeholder="label" />
						<HelperText color="danger">Must be valid</HelperText>
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
					<Input placeholder="Round" shape="round"></Input>
					<Input placeholder="Semi-Round" shape="semi-round"></Input>
					<Input placeholder="Rectangle" shape="rectangle"></Input>
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
						<Input placeholder={size} {size}></Input>
					{/each}
				</Stack>
			</CardBody>
		</Card>
	{/snippet}
</DualThemeLayout>
