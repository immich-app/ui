<script lang="ts">
  import MarkdownPage from '$docs/components/MarkdownPage.svelte';
  import { type ContainerSize } from '@immich/ui';
  import type { Snippet } from 'svelte';

  type Props = {
    name: string;
    description: string;
    size?: ContainerSize;
    children?: Snippet;
  };

  const { size, name, description, children }: Props = $props();
</script>

<MarkdownPage attributes={{ title: name, description }} {size} {children} />
