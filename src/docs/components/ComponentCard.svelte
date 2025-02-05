<script lang="ts">
	import { asComponentHref } from '$docs/utilities.js';
	import { Button, Icon, VStack, Text } from '@immich/ui';

	type Props = {
		component: { name: string; icon: string };
	};

	const { component }: Props = $props();
</script>

<Button
	href={asComponentHref(component.name)}
	variant="outline"
	color="secondary"
	class="h-24 w-44 rounded-2xl border border-gray-300 dark:border-gray-700"
	size="large"
>
	<VStack gap={2}>
		<Icon icon={component.icon} size="1.5rem" aria-hidden />
		<Text size="small">{component.name}</Text>
	</VStack>
</Button>
