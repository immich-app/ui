<script lang="ts">
  import Heading from '$lib/components/Heading/Heading.svelte';
  import type { HeadingTag, Size } from '$lib/types.js';
  import type { Snippet } from 'svelte';

  type Props = {
    id?: string;
    level?: number;
    children: Snippet;
  };

  const { children, id, level }: Props = $props();

  const getSizeAndTag = (level?: number): { size: Size; tag: HeadingTag; padding: string } => {
    switch (level) {
      case 1: {
        return { size: 'giant', tag: 'h1', padding: 'mb-6' };
      }
      case 2: {
        return { size: 'large', tag: 'h2', padding: 'my-4' };
      }
      case 3: {
        return { size: 'medium', tag: 'h3', padding: 'my-3' };
      }
      case 4: {
        return { size: 'small', tag: 'h4', padding: 'my-1' };
      }
      case 5: {
        return { size: 'tiny', tag: 'h5', padding: 'my-0.5' };
      }
      default: {
        return { size: 'tiny', tag: 'p', padding: '' };
      }
    }
  };

  let { size, tag, padding } = $derived(getSizeAndTag(level));
</script>

<Heading {size} {tag} class={padding} {id} {children} />
