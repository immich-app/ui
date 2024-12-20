<script lang="ts">
	import Lorem from '$docs/components/Lorem.svelte';
	import { Card, CardBody, CardHeader, CardTitle, Stack } from '@immich/ui';
</script>

<Stack>
	<Card variant="filled" color="primary">
		<CardHeader>
			<CardTitle>Title</CardTitle>
		</CardHeader>
		<CardBody>
			<Lorem />
		</CardBody>
	</Card>

	<Card variant="filled" color="secondary">
		<CardHeader>
			<CardTitle>Title</CardTitle>
		</CardHeader>
		<CardBody>
			<Lorem />
		</CardBody>
	</Card>

	<Card variant="filled" color="success">
		<CardHeader>
			<CardTitle>Title</CardTitle>
		</CardHeader>
		<CardBody>
			<Lorem />
		</CardBody>
	</Card>

	<Card variant="filled" color="info">
		<CardHeader>
			<CardTitle>Title</CardTitle>
		</CardHeader>
		<CardBody>
			<Lorem />
		</CardBody>
	</Card>

	<Card variant="filled" color="warning">
		<CardHeader>
			<CardTitle>Title</CardTitle>
		</CardHeader>
		<CardBody>
			<Lorem />
		</CardBody>
	</Card>

	<Card variant="filled" color="danger">
		<CardHeader>
			<CardTitle>Title</CardTitle>
		</CardHeader>
		<CardBody>
			<Lorem />
		</CardBody>
	</Card>
</Stack>
