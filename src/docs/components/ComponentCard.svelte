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

<Button href="/examples/{asSlug(title)}" variant="outline" color="primary" class="h-24 w-40">
	<VStack gap={2} class="p-6">
		<Icon {icon} size="2em" />
		<Heading size="tiny">{title}</Heading>
	</VStack>
</Button>
