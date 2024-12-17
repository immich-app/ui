<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import BasicExample from './BasicExample.svelte';
	import basicExample from './BasicExample.svelte?raw';

	const examples = [{ title: 'Basic', code: basicExample, component: BasicExample }];
</script>

<DualThemeLayout name="Field" {examples} />
