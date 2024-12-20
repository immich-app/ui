<script lang="ts">
	import Lorem from '$docs/components/Lorem.svelte';
	import { Alert } from '@immich/ui';
	import { mdiHelpCircleOutline } from '@mdi/js';
</script>

<Alert icon={mdiHelpCircleOutline} title="This is an alert">
	<Lorem />
</Alert>
