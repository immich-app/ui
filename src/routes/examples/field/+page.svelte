<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import { Card, CardBody, CardHeader, CardTitle, Field, Input } from '@immich/ui';
</script>

<DualThemeLayout name="Field">
	{#snippet component()}
		<Card>
			<CardHeader>
				<CardTitle>With Input</CardTitle>
			</CardHeader>
			<CardBody>
				<Field label="Label">
					<Input placeholder="label" />
				</Field>
			</CardBody>
		</Card>
	{/snippet}
</DualThemeLayout>
