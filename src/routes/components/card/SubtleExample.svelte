<script lang="ts">
	import Lorem from '$docs/components/Lorem.svelte';
	import { Card, CardBody, CardHeader, CardTitle, Stack } from '@immich/ui';
</script>

<Stack>
	<Card color="primary">
		<CardHeader>
			<CardTitle tag="p">Title</CardTitle>
		</CardHeader>
		<CardBody>
			<Lorem />
		</CardBody>
	</Card>

	<Card color="secondary">
		<CardHeader>
			<CardTitle tag="p">Title</CardTitle>
		</CardHeader>
		<CardBody>
			<Lorem />
		</CardBody>
	</Card>

	<Card color="success">
		<CardHeader>
			<CardTitle tag="p">Title</CardTitle>
		</CardHeader>
		<CardBody>
			<Lorem />
		</CardBody>
	</Card>

	<Card color="info">
		<CardHeader>
			<CardTitle tag="p">Title</CardTitle>
		</CardHeader>
		<CardBody>
			<Lorem />
		</CardBody>
	</Card>

	<Card color="warning">
		<CardHeader>
			<CardTitle tag="p">Title</CardTitle>
		</CardHeader>
		<CardBody>
			<Lorem />
		</CardBody>
	</Card>

	<Card color="danger">
		<CardHeader>
			<CardTitle tag="p">Title</CardTitle>
		</CardHeader>
		<CardBody>
			<Lorem />
		</CardBody>
	</Card>
</Stack>
