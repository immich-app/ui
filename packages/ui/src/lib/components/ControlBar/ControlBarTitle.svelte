<script lang="ts">
  import Heading from '$lib/components/Heading/Heading.svelte';
  import type { Color, FontWeight, HeadingSize, HeadingTag } from '$lib/types.js';
  import type { Snippet } from 'svelte';

  type Props = {
    /**
     * The HTML element type.
     */
    tag?: HeadingTag;
    class?: string;
    size?: HeadingSize;
    color?: Color;
    fontWeight?: FontWeight;
    children: Snippet;
  };

  const { size = 'small', fontWeight = 'medium', color, tag, class: className, children }: Props = $props();
</script>

<Heading {tag} {size} {color} {fontWeight} class={className}>
  {@render children?.()}
</Heading>
