<script lang="ts">
	import Lorem from '$docs/components/Lorem.svelte';
	import { Card, CardBody, CardHeader, CardTitle, Stack } from '@immich/ui';
</script>

<Stack>
	<Card variant="subtle" color="primary">
		<CardHeader>
			<CardTitle>Title</CardTitle>
		</CardHeader>
		<CardBody>
			<Lorem />
		</CardBody>
	</Card>

	<Card variant="subtle" color="secondary">
		<CardHeader>
			<CardTitle>Title</CardTitle>
		</CardHeader>
		<CardBody>
			<Lorem />
		</CardBody>
	</Card>

	<Card variant="subtle" color="success">
		<CardHeader>
			<CardTitle>Title</CardTitle>
		</CardHeader>
		<CardBody>
			<Lorem />
		</CardBody>
	</Card>

	<Card variant="subtle" color="info">
		<CardHeader>
			<CardTitle>Title</CardTitle>
		</CardHeader>
		<CardBody>
			<Lorem />
		</CardBody>
	</Card>

	<Card variant="subtle" color="warning">
		<CardHeader>
			<CardTitle>Title</CardTitle>
		</CardHeader>
		<CardBody>
			<Lorem />
		</CardBody>
	</Card>

	<Card variant="subtle" color="danger">
		<CardHeader>
			<CardTitle>Title</CardTitle>
		</CardHeader>
		<CardBody>
			<Lorem />
		</CardBody>
	</Card>
</Stack>
