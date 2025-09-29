<script lang="ts">
  import { resolveUrl } from '$lib/utilities/common.js';

  type Props = {
    site: {
      title: string;
      description: string;
      imageUrl?: string;
    };
    page?: {
      title: string;
      description: string;
      imageUrl?: string;
    };
  };

  const { site, page }: Props = $props();

  let fullTitle = $derived(page ? `${page.title} | ${site.title}` : site.title);

  let pageDescription = $derived(page?.description ?? site.description);
  let pageUrl = $derived(page?.imageUrl ?? site?.imageUrl);
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={site.description} />

  <!-- Facebook Meta Tags -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="{site.title} — {site.description}" />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={pageDescription} />
  {#if pageUrl}
    <meta property="og:image" content={resolveUrl(pageUrl)} />
  {/if}

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={pageDescription} />
  {#if pageUrl}
    <meta property="twitter:image" content={resolveUrl(pageUrl)} />
  {/if}
</svelte:head>
