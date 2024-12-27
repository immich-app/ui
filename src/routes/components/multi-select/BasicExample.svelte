<script>
	import Stack from '$lib/components/Stack/Stack.svelte';
	import { Field, MultiSelect } from '@immich/ui';
</script>

<Stack class="mb-8 max-w-[250px]" gap={8}>
	<Field label="Framework">
		<MultiSelect data={['Svelte', 'React', 'Angular']} />
	</Field>

	<Field label="Label">
		<MultiSelect
			data={[
				{ label: 'Svelte', value: 'svelte' },
				{ label: 'React', value: 'react' },
				{ label: 'Angular', value: 'angular' },
			]}
		/>
	</Field>

	<Field label="Disabled option">
		<MultiSelect
			data={[{ value: 'Svelte' }, { value: 'React' }, { value: 'Angular', disabled: true }]}
		/>
	</Field>

	<Field label="Long list">
		<MultiSelect
			data={[
				{ value: 'light-monochrome', label: 'Light Monochrome' },
				{ value: 'dark-green', label: 'Dark Green' },
				{ value: 'svelte-orange', label: 'Svelte Orange' },
				{ value: 'punk-pink', label: 'Punk Pink' },
				{ value: 'ocean-blue', label: 'Ocean Blue', disabled: true },
				{ value: 'sunset-red', label: 'Sunset Red' },
				{ value: 'forest-green', label: 'Forest Green' },
				{ value: 'lavender-purple', label: 'Lavender Purple', disabled: true },
				{ value: 'mustard-yellow', label: 'Mustard Yellow' },
				{ value: 'slate-gray', label: 'Slate Gray' },
				{ value: 'neon-green', label: 'Neon Green' },
				{ value: 'coral-reef', label: 'Coral Reef' },
				{ value: 'midnight-blue', label: 'Midnight Blue' },
				{ value: 'crimson-red', label: 'Crimson Red' },
				{ value: 'mint-green', label: 'Mint Green' },
				{ value: 'pastel-pink', label: 'Pastel Pink' },
				{ value: 'golden-yellow', label: 'Golden Yellow' },
				{ value: 'deep-purple', label: 'Deep Purple' },
				{ value: 'turquoise-blue', label: 'Turquoise Blue' },
				{ value: 'burnt-orange', label: 'Burnt Orange' },
			]}
		/>
	</Field>
</Stack>
