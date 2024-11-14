<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button from '../lib/components/Button.svelte';
	import { fn } from '@storybook/test';

	const { Story } = defineMeta({
		title: 'Button',
		component: Button,
		tags: ['autodocs'],
		argTypes: {},
		args: {
			onclick: fn(),
		},
	});
</script>

<Story name="Primary" args={{ color: 'primary' }} />
<Story name="Secondary" args={{ color: 'secondary' }} />
<Story name="Success" args={{ color: 'success' }} />
