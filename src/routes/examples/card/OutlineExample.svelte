<script lang="ts">
	import Lorem from '$docs/components/Lorem.svelte';
	import { Card, CardBody, CardHeader, CardTitle, Stack } from '@immich/ui';
</script>

<Stack>
	<Card variant="outline" color="primary">
		<CardHeader>
			<CardTitle>Title</CardTitle>
		</CardHeader>
		<CardBody>
			<Lorem />
		</CardBody>
	</Card>

	<Card variant="outline" color="secondary">
		<CardHeader>
			<CardTitle>Title</CardTitle>
		</CardHeader>
		<CardBody>
			<Lorem />
		</CardBody>
	</Card>

	<Card variant="outline" color="success">
		<CardHeader>
			<CardTitle>Title</CardTitle>
		</CardHeader>
		<CardBody>
			<Lorem />
		</CardBody>
	</Card>

	<Card variant="outline" color="info">
		<CardHeader>
			<CardTitle>Title</CardTitle>
		</CardHeader>
		<CardBody>
			<Lorem />
		</CardBody>
	</Card>

	<Card variant="outline" color="warning">
		<CardHeader>
			<CardTitle>Title</CardTitle>
		</CardHeader>
		<CardBody>
			<Lorem />
		</CardBody>
	</Card>

	<Card variant="outline" color="danger">
		<CardHeader>
			<CardTitle>Title</CardTitle>
		</CardHeader>
		<CardBody>
			<Lorem />
		</CardBody>
	</Card>
</Stack>
