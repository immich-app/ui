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

  const getSizeAndTag = (level?: number): { size: Size; tag: HeadingTag } => {
    switch (level) {
      case 1: {
        return { size: 'giant', tag: 'h1' };
      }
      case 2: {
        return { size: 'large', tag: 'h2' };
      }
      case 3: {
        return { size: 'medium', tag: 'h3' };
      }
      case 4: {
        return { size: 'small', tag: 'h4' };
      }
      case 5: {
        return { size: 'tiny', tag: 'h5' };
      }
      case 6: {
        return { size: 'tiny', tag: 'h6' };
      }
      default: {
        return { size: 'tiny', tag: 'p' };
      }
    }
  };

  let { size, tag } = $derived(getSizeAndTag(level));
</script>

<Heading {size} {tag} class="mt-4" {id}>
  {@render children()}
</Heading>
