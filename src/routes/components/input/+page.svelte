<script lang="ts">
	import ComponentDescription from '$docs/components/ComponentDescription.svelte';
	import ComponentExamples from '$docs/components/ComponentExamples.svelte';
	import ComponentFieldCard from '$docs/components/ComponentFieldCard.svelte';
	import ComponentPage from '$docs/components/ComponentPage.svelte';
	import ComponentTipCard from '$docs/components/ComponentTipCard.svelte';
	import { asComponentHref } from '$docs/utilities.js';
	import { Link, Text } from '@immich/ui';
	import BasicExample from './BasicExample.svelte';
	import basicExample from './BasicExample.svelte?raw';
	import ShapeExample from './ShapeExample.svelte';
	import shapeExample from './ShapeExample.svelte?raw';
	import SizeExample from './SizeExample.svelte';
	import sizeExample from './SizeExample.svelte?raw';
</script>

<ComponentPage name="Input">
	<ComponentDescription>Accept text input from the user</ComponentDescription>
	<ComponentFieldCard />
	<ComponentTipCard>
		<Text
			>See <Link href={asComponentHref('PasswordInput')}>PasswordInput</Link> for password input fields
			fields</Text
		>
	</ComponentTipCard>
	<ComponentExamples
		examples={[
			{ title: 'States', code: basicExample, component: BasicExample },
			{ title: 'Shapes', code: shapeExample, component: ShapeExample },
			{ title: 'Sizes', code: sizeExample, component: SizeExample },
		]}
	/>
</ComponentPage>
