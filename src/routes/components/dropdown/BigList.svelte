<script lang="ts">
	import { Stack } from '@immich/ui';
	import Dropdown from '@immich/ui/components/Dropdown/Dropdown.svelte';
</script>

<Stack class="mb-8 max-w-[250px]" gap={8}>
	<Dropdown
		placeholder="Select a fruit"
		data={[
			{ label: 'Apple', value: 'apple' },
			{ label: 'Banana', value: 'banana' },
			{ label: 'Cherry', value: 'cherry' },
			{ label: 'Date', value: 'date' },
			{ label: 'Elderberry', value: 'elderberry' },
			{ label: 'Fig', value: 'fig' },
			{ label: 'Grape', value: 'grape' },
			{ label: 'Honeydew', value: 'honeydew' },
			{ label: 'Kiwi', value: 'kiwi' },
			{ label: 'Lemon', value: 'lemon' },
			{ label: 'Mango', value: 'mango' },
			{ label: 'Nectarine', value: 'nectarine' },
			{ label: 'Orange', value: 'orange' },
			{ label: 'Papaya', value: 'papaya' },
			{ label: 'Quince', value: 'quince' },
			{ label: 'Raspberry', value: 'raspberry' },
			{ label: 'Strawberry', value: 'strawberry' },
			{ label: 'Tangerine', value: 'tangerine' },
			{ label: 'Ugli fruit', value: 'ugli-fruit' },
			{ label: 'Vanilla bean', value: 'vanilla-bean' },
			{ label: 'Watermelon', value: 'watermelon' },
			{ label: 'Xigua', value: 'xigua' },
			{ label: 'Yellow passion fruit', value: 'yellow-passion-fruit' },
			{ label: 'Zucchini', value: 'zucchini' },
		]}
		onChange={() => {}}
	/>
</Stack>
