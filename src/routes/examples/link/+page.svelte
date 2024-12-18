<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import basicExample from './BasicExample.svelte?raw';
	import BasicExample from './BasicExample.svelte';

	const examples = [{ title: 'Basic', code: basicExample, component: BasicExample }];
</script>

<DualThemeLayout name="Link" {examples}></DualThemeLayout>
