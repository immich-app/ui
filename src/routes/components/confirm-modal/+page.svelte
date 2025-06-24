<script lang="ts">
	import ComponentExamples from '$docs/components/ComponentExamples.svelte';
	import ComponentPage from '$docs/components/ComponentPage.svelte';
	import ComponentTipCard from '$docs/components/ComponentTipCard.svelte';
	import { asComponentHref } from '$docs/utilities.js';
	import { Link, Text } from '@immich/ui';
	import BasicExample from './BasicExample.svelte';
	import basicExample from './BasicExample.svelte?raw';
</script>

<ComponentPage name="ConfirmModal">
	<ComponentTipCard>
		<Text>
			See <Link href={asComponentHref('Modal')}>Modal</Link> for more complex modals
		</Text>
	</ComponentTipCard>
	<ComponentExamples examples={[{ title: 'Basic', code: basicExample, component: BasicExample }]} />
</ComponentPage>
