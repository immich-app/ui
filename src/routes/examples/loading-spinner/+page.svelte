<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import sizeExample from './SizeExample.svelte?raw';
	import SizeExample from './SizeExample.svelte';
	import colorExample from './ColorExample.svelte?raw';
	import ColorExample from './ColorExample.svelte';

	const examples = [
		{ title: 'Sizes', code: sizeExample, component: SizeExample },
		{ title: 'Colors', code: colorExample, component: ColorExample },
	];
</script>

<DualThemeLayout name="LoadingSpinner" {examples}></DualThemeLayout>
