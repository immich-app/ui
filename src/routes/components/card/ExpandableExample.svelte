<script lang="ts">
	import Lorem from '$docs/components/Lorem.svelte';
	import { Card, CardBody, CardHeader, CardTitle, Stack } from '@immich/ui';
</script>

<Stack>
	<Card expandable>
		<CardHeader>
			<CardTitle tag="p">Title</CardTitle>
		</CardHeader>
		<CardBody>
			<Lorem />
		</CardBody>
	</Card>

	<Card color="primary" expandable>
		<CardHeader>
			<CardTitle tag="p">Title</CardTitle>
		</CardHeader>
		<CardBody>
			<Lorem />
		</CardBody>
	</Card>
</Stack>
