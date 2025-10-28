<script lang="ts">
  import Link from '$lib/components/Link/Link.svelte';
  import Text from '$lib/components/Text/Text.svelte';

  type Props = {
    href: string;
    text: string;
  };

  let { href, text }: Props = $props();
</script>

<Link {href} underline={false} class="text-dark/90 hover:text-primary transition-colors">
  <Text>{text}</Text>
</Link>
