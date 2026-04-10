<script lang="ts">
  import PageDescription from '$docs/components/PageDescription.svelte';
  import { siteMetadata } from '$docs/constants.js';
  import { Container, Heading, SiteMetadata, type BreadcrumbItem, type ContainerSize } from '@immich/ui';
  import type { Snippet } from 'svelte';

  type Props = {
    attributes: { title: string; description: string };
    size?: ContainerSize;
    breadcrumbs?: BreadcrumbItem[];
    children?: Snippet;
  };

  const { attributes, size = 'medium', children }: Props = $props();
  const { title, description } = $derived(attributes);

  const page = $derived({ title, description });
</script>

<SiteMetadata site={siteMetadata} {page} />

<Container {size} center class="my-4 flex flex-col p-4 lg:my-8">
  <section class="mb-8">
    <Heading tag="h1" size="giant">{page.title}</Heading>
    {#if page.description}
      <PageDescription>{page.description}</PageDescription>
    {/if}
  </section>

  {@render children?.()}
</Container>
