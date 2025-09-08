<script lang="ts">
	import { HStack, Icon, Link, Text } from '@immich/ui';

	type Props = {
		href: string;
		icon: string | { path: string };
		text: string;
	};

	let { href, icon, text }: Props = $props();
</script>

<Link {href} external>
	<HStack>
		<Icon {icon} size="1.5em" />
		<Text>{text}</Text>
	</HStack>
</Link>
