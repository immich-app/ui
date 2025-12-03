<script lang="ts">
  import Icon from '$lib/components/Icon/Icon.svelte';
  import Link from '$lib/components/Link/Link.svelte';
  import type { BreadcrumbItem, BreadcrumbsProps } from '$lib/types.js';
  import { cleanClass } from '$lib/utilities/internal.js';
  import { mdiChevronRight } from '@mdi/js';

  let { separator = mdiChevronRight, class: className, items, ...props }: BreadcrumbsProps = $props();
</script>

{#snippet child({ title, icon }: BreadcrumbItem)}
  <span class="flex items-center gap-1">
    {#if icon}
      <Icon {icon} size="1.25rem" />
    {/if}
    {#if title}
      <span>{title}</span>
    {/if}
  </span>
{/snippet}

<nav class={cleanClass('flex flex-wrap items-center gap-1', className)} {...props}>
  {#each items as item, index (index)}
    {#if index > 0}
      {#if typeof separator === 'object' && 'text' in separator}
        <span class="mx-1">{separator.text}</span>
      {:else}
        <Icon icon={separator} size="1rem" />
      {/if}
    {/if}
    {#if item.href}
      <Link href={item.href} class="underline">
        {@render child(item)}
      </Link>
    {:else}
      {@render child(item)}
    {/if}
  {/each}
</nav>
