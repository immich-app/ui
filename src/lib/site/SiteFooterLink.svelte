<script lang="ts">
  import HStack from '$lib/components/Stack/HStack.svelte';
  import Link from '$lib/components/Link/Link.svelte';
  import Text from '$lib/components/Text/Text.svelte';

  type Props = {
    href: string;
    text: string;
  };

  let { href, text }: Props = $props();
</script>

<Link {href} underline={false} class="text-dark/80 hover:text-primary transition-colors">
  <HStack>
    <Text>{text}</Text>
  </HStack>
</Link>
