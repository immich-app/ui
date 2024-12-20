<script lang="ts">
	import { asComponentHref } from '$docs/utilities.js';
	import { Button, Heading, Icon, VStack } from '@immich/ui';

	type Props = {
		component: { name: string; icon: string };
	};

	const { component }: Props = $props();
</script>

<Button href={asComponentHref(component.name)} variant="outline" color="primary" class="h-24 w-40">
	<VStack gap={2} class="p-6">
		<Icon icon={component.icon} size="2em" />
		<Heading size="tiny">{component.name}</Heading>
	</VStack>
</Button>
