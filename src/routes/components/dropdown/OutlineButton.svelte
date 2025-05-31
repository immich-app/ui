<script lang="ts">
	import { Stack } from '@immich/ui';
	import Dropdown from '@immich/ui/components/Dropdown/Dropdown.svelte';
</script>

<Stack class="mb-8 max-w-[250px]" gap={8}>
	<Dropdown
		title="Select a framework"
		buttonVariant="outline"
		buttonColor="secondary"
		options={[
			{ label: 'Svelte', value: 'svelte' },
			{ label: 'React', value: 'react' },
			{ label: 'Angular', value: 'angular' },
		]}
		onSelect={() => {}}
		render={({ label, value }) => ({
			title: label,
			key: value,
		})}
	/>
</Stack>
