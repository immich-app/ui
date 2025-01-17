<script lang="ts">
	import ComponentDescription from '$docs/components/ComponentDescription.svelte';
	import ComponentExamples from '$docs/components/ComponentExamples.svelte';
	import ComponentPage from '$docs/components/ComponentPage.svelte';
	import { asComponentHref } from '$docs/utilities.js';
	import { Link } from '@immich/ui';
	import BasicExample from './BasicExample.svelte';
	import basicExample from './BasicExample.svelte?raw';
	import GroupExample from './GroupExample.svelte';
	import groupExample from './GroupExample.svelte?raw';
	import VariantExample from './VariantExample.svelte';
	import variantExample from './VariantExample.svelte?raw';
</script>

<ComponentPage name="Navbar">
	<ComponentDescription
		>This component exports a NavbarItem for creating navigation menus. This is usually used in
		conjunction with the <Link href={asComponentHref('AppShell')}>AppSidebar</Link> component</ComponentDescription
	>
	<ComponentExamples
		examples={[
			{ title: 'Basic', code: basicExample, component: BasicExample },
			{ title: 'Group', code: groupExample, component: GroupExample },
			{ title: 'Variant', code: variantExample, component: VariantExample },
		]}
	/>
</ComponentPage>
