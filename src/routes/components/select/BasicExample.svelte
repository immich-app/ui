<script lang="ts">
	import { Code, Field, Select, Stack, Text, type SelectItem } from '@immich/ui';

	const themes: SelectItem[] = [
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
	];

	let value = $state(themes[0]);
</script>

<Stack class="mb-8 max-w-[250px]" gap={8}>
	<Field label="Framework">
		<Select data={['Svelte', 'React', 'Angular']} />
	</Field>

	<Field label="Label">
		<Select
			data={[
				{ label: 'Svelte', value: 'svelte' },
				{ label: 'React', value: 'react' },
				{ label: 'Angular', value: 'angular' },
			]}
		/>
	</Field>

	<Field label="Disabled option">
		<Select
			data={[{ value: 'Svelte' }, { value: 'React' }, { value: 'Angular', disabled: true }]}
		/>
	</Field>

	<Field label="Disabled select" disabled>
		<Select
			data={[{ value: 'Svelte' }, { value: 'React' }, { value: 'Angular', disabled: true }]}
		/>
	</Field>

	<Field label="Long list">
		<Select bind:value data={themes} />
	</Field>
	<div>
		<Text>Theme:</Text>
		<Code class="whitespace-pre">{JSON.stringify(value, null, 2)}</Code>
	</div>
</Stack>
