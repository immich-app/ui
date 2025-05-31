<script lang="ts">
	import { Stack } from '@immich/ui';
	import Dropdown from '@immich/ui/components/Dropdown/Dropdown.svelte';
</script>

<Stack class="mb-8 max-w-[250px]" gap={8}>
	<Dropdown
		title="Select a fruit"
		options={[
			{ label: 'Apple' },
			{ label: 'Banana' },
			{ label: 'Cherry' },
			{ label: 'Date' },
			{ label: 'Elderberry' },
			{ label: 'Fig' },
			{ label: 'Grape' },
			{ label: 'Honeydew' },
			{ label: 'Kiwi' },
			{ label: 'Lemon' },
			{ label: 'Mango' },
			{ label: 'Nectarine' },
			{ label: 'Orange' },
			{ label: 'Papaya' },
			{ label: 'Quince' },
			{ label: 'Raspberry' },
			{ label: 'Strawberry' },
			{ label: 'Tangerine' },
			{ label: 'Ugli fruit' },
			{ label: 'Vanilla bean' },
			{ label: 'Watermelon' },
		]}
		onSelect={() => {}}
		render={({ label }) => ({
			title: label,
			key: label.toLowerCase(),
		})}
	/>
</Stack>
