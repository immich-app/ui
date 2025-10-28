<script lang="ts">
  import { isExternalLink, resolveUrl } from '$lib/utilities/common.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import type { Snippet } from 'svelte';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  type Props = {
    class?: string;
    children?: Snippet;
    href: string;
    underline?: boolean;
  } & HTMLAnchorAttributes;

  const { href, class: className, underline = true, children, ...restProps }: Props = $props();

  let resolved = $derived(resolveUrl(href));
  let external = $derived(isExternalLink(resolved));
</script>

<a
  href={resolved}
  draggable="false"
  class={cleanClass(underline && 'underline', className)}
  target={external ? '_blank' : undefined}
  rel={external ? 'noopener noreferrer' : undefined}
  {...restProps}
>
  {#if children}
    {@render children()}
  {:else}
    {href}
  {/if}
</a>
