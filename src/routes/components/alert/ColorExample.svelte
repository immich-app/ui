<script lang="ts">
	import Lorem from '$docs/components/Lorem.svelte';
	import { Alert, Stack, type Color } from '@immich/ui';

	const colors: Color[] = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
</script>

<Stack gap={4}>
	<Stack gap={2}>
		{#each colors as color (color)}
			<Alert {color} title="This is an alert" />
			<Alert {color}>
				<p>This is an alert</p>
			</Alert>
			<Alert {color} title="This is a primary alert">
				<Lorem />
			</Alert>
		{/each}
	</Stack>
</Stack>
