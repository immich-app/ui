<script lang="ts">
  import { resolveMetadata, resolveUrl, type ArticleMetadata, type Metadata } from '$lib/utilities/common.js';

  type Props = {
    site: Metadata;
    page?: Metadata;
    article?: ArticleMetadata;
  };

  const { site, page, article }: Props = $props();

  let resolved = $derived(resolveMetadata(site, page, article));
</script>

<svelte:head>
  <title>{resolved.title}</title>
  <meta name="description" content={resolved.description} />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={resolved.title} />
  <meta name="twitter:description" content={resolved.description} />
  {#if resolved.imageUrl}
    <meta property="twitter:image" content={resolveUrl(resolved.imageUrl)} />
  {/if}

  <!-- Facebook Meta Tags -->
  <meta property="og:type" content={resolved.type} />
  <meta property="og:site_name" content={resolved.siteName} />
  <meta property="og:title" content={resolved.title} />
  <meta property="og:description" content={resolved.description} />
  {#if resolved.imageUrl}
    <meta property="og:image" content={resolveUrl(resolved.imageUrl)} />
  {/if}

  {#if resolved.article}
    <meta property="og:article:published_time" content={resolved.article.publishedTime} />
    {#if resolved.article.modifiedTime}
      <meta property="og:article:modified_time" content={resolved.article.modifiedTime} />
    {/if}
    {#if resolved.article.expirationTime}
      <meta property="og:article:expiration_time" content={resolved.article.expirationTime} />
    {/if}
    {#if resolved.article.section}
      <meta property="og:article:section" content={resolved.article.section} />
    {/if}
    {#each resolved.article.authors ?? [] as author (author)}
      <meta property="og:article:author" content={author} />
    {/each}
    {#each resolved.article.tags ?? [] as tag (tag)}
      <meta property="og:article:tag" content={tag} />
    {/each}
  {/if}
</svelte:head>
