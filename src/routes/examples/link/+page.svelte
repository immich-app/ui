<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import Text from '$lib/components/Text/Text.svelte';
	import { Card, CardBody, CardHeader, CardTitle, Link, Stack } from '@immich/ui';
</script>

<DualThemeLayout name="Link">
	{#snippet component()}
		<Card>
			<CardHeader>
				<CardTitle>Basic</CardTitle>
			</CardHeader>
			<CardBody>
				<Stack>
					<Text><Link href="#">Visit Immich UI</Link></Text>
					<Text>Read the <Link href="#">release notes</Link></Text>
					<Text>See the <Link href="#">documentation</Link> for more information</Text>
				</Stack>
			</CardBody>
		</Card>
	{/snippet}
</DualThemeLayout>
