<script lang="ts">
  import { resolveMetadata, resolveUrl, type Metadata } from '$lib/utilities/common.js';

  type Props = {
    site: Metadata;
    page?: Metadata;
  };

  const { site, page }: Props = $props();

  let resolved = $derived(resolveMetadata(site, page));
</script>

<svelte:head>
  <title>{resolved.title}</title>
  <meta name="description" content={resolved.description} />

  <!-- Facebook Meta Tags -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={resolved.siteName} />
  <meta property="og:title" content={resolved.title} />
  <meta property="og:description" content={resolved.description} />
  {#if resolved.imageUrl}
    <meta property="og:image" content={resolveUrl(resolved.imageUrl)} />
  {/if}

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={resolved.title} />
  <meta name="twitter:description" content={resolved.description} />
  {#if resolved.imageUrl}
    <meta property="twitter:image" content={resolveUrl(resolved.imageUrl)} />
  {/if}
</svelte:head>
