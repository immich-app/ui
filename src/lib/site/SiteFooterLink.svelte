<script lang="ts">
  import HStack from '$lib/components/Stack/HStack.svelte';
  import Icon from '$lib/components/Icon/Icon.svelte';
  import Link from '$lib/components/Link/Link.svelte';
  import Text from '$lib/components/Text/Text.svelte';

  type Props = {
    href: string;
    icon: string | { path: string };
    text: string;
  };

  let { href, icon, text }: Props = $props();
</script>

<Link {href}>
  <HStack>
    <Icon {icon} size="1.5em" />
    <Text>{text}</Text>
  </HStack>
</Link>
