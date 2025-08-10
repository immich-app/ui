<script lang="ts">
	import { Stack } from '@immich/ui';
	import Dropdown from '@immich/ui/components/Dropdown/Dropdown.svelte';
</script>

<Stack class="mb-8 max-w-[250px]" gap={8}>
	<Dropdown
		placeholder="Select a framework"
		color="secondary"
		variant="outline"
		data={[
			{ label: 'Svelte', value: 'svelte' },
			{ label: 'React', value: 'react' },
			{ label: 'Angular', value: 'angular' },
		]}
	/>
</Stack>
