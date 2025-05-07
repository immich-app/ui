<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Button from './Button.svelte';

	const { Story } = defineMeta({
		title: 'Components/Button',
		component: Button,
		decorators: [
			/* ... */
		],
		parameters: {
			/* ... */
		},
	});
</script>

<Story name="Default">Test</Story>
