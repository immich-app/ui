<script lang="ts">
	import { Button, Heading, Icon, VStack } from '@immich/ui';

	type Props = {
		title: string;
		icon: string;
	};

	const { title, icon }: Props = $props();

	const asSlug = (value: string) =>
		value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`).replace(/^-/, '');
</script>

<Button href="/examples/{asSlug(title)}" variant="outline" color="primary" class="h-32 w-48">
	<VStack gap={4} class="p-6">
		<Icon {icon} size="3em" />
		<Heading size="tiny">{title}</Heading>
	</VStack>
</Button>
