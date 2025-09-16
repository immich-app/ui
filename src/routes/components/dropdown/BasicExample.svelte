<script lang="ts">
	import { Stack } from '@immich/ui';
	import Dropdown from '@immich/ui/components/Dropdown/Dropdown.svelte';
	import { mdiPartyPopper, mdiTrashCan, mdiReact } from '@mdi/js';
</script>

<Stack class="mb-8 max-w-[250px]" gap={8}>
	<Dropdown
		placeholder="Select a framework"
		data={[
			{ label: 'Svelte', value: 'svelte', icon: mdiPartyPopper },
			{ label: 'React', value: 'react', icon: mdiReact },
			{ label: 'Angular', value: 'angular', icon: mdiTrashCan },
		]}
		onChange={() => {}}
	/>
</Stack>
