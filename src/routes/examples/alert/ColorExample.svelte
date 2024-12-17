<script lang="ts">
	import Lorem from '$docs/components/Lorem.svelte';
	import { Alert, Stack } from '@immich/ui';
</script>

<Stack>
	<Alert color="primary" title="This is a primary alert">
		<Lorem />
	</Alert>
	<Alert color="secondary" title="This is a secondary alert">
		<Lorem />
	</Alert>
	<Alert color="success" title="This is a success alert">
		<Lorem />
	</Alert>
	<Alert color="info" title="This is an info alert">
		<Lorem />
	</Alert>
	<Alert color="warning" title="This is a warning alert">
		<Lorem />
	</Alert>
	<Alert color="danger" title="This is a danger alert">
		<Lorem />
	</Alert>
</Stack>
