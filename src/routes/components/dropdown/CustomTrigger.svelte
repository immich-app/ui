<script lang="ts">
	import { Button, Stack } from '@immich/ui';
	import Dropdown, { type DropdownItem } from '@immich/ui/components/Dropdown/Dropdown.svelte';
	import Icon from '@immich/ui/components/Icon/Icon.svelte';

	let options = [
		{ label: 'Svelte', value: 'svelte' },
		{ label: 'React', value: 'react' },
		{ label: 'Angular', value: 'angular' },
	];
	let selectedOption = $state<DropdownItem | null>(options[0]);
</script>

<Stack class="mb-8 max-w-[250px]" gap={8}>
	<Dropdown placeholder="Select a framework" data={options}>
		{#snippet trigger({ props, selectedIcon })}
			<Button {...props} color="success" variant="filled" fullWidth size="large" shape="round">
				{selectedOption?.value || 'Select an option'}
				{#if selectedIcon}
					<Icon icon={selectedIcon} />
				{/if}
			</Button>
		{/snippet}
	</Dropdown>
</Stack>
