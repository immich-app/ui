<script lang="ts">
	import ComponentExamples from '$docs/components/ComponentExamples.svelte';
	import ComponentNoteCard from '$docs/components/ComponentNoteCard.svelte';
	import ComponentPage from '$docs/components/ComponentPage.svelte';
	import { Link, Text } from '@immich/ui';
	import BasicExample from './BasicExample.svelte';
	import basicExample from './BasicExample.svelte?raw';
	import IconExample from './IconExample.svelte';
	import iconExample from './IconExample.svelte?raw';
	import RouteExample from './RouteExample.svelte';
	import routeExample from './RouteExample.svelte?raw';
	import SizeExample from './SizeExample.svelte';
	import sizeExample from './SizeExample.svelte?raw';
	import ConfirmDialogExample from './ConfirmDialogExample.svelte';
	import confirmDialogExample from './ConfirmDialogExample.svelte?raw';
	import ComponentTipCard from '$docs/components/ComponentTipCard.svelte';
	import { asComponentHref } from '$docs/utilities.js';
	import NestedExample from './NestedExample.svelte';
	import nestedExample from './NestedExample.svelte?raw';
</script>

<ComponentPage name="Modal">
	<ComponentNoteCard>
		<Text>Modals are always screen width and height on small devices</Text>
	</ComponentNoteCard>
	<ComponentTipCard>
		<Text>
			See <Link href={asComponentHref('ConfirmModal')}>ConfirmModal</Link> for a basic confirm modal
		</Text>
	</ComponentTipCard>
	<ComponentExamples
		examples={[
			{ title: 'Basic', code: basicExample, component: BasicExample },
			{ title: 'Icon', code: iconExample, component: IconExample },
			{ title: 'Size', code: sizeExample, component: SizeExample },
			{ title: 'Route', code: routeExample, component: RouteExample },
			{ title: 'Confirm Dialog', code: confirmDialogExample, component: ConfirmDialogExample },
			{ title: 'Nested Dialog', code: nestedExample, component: NestedExample },
		]}
	/>
</ComponentPage>
