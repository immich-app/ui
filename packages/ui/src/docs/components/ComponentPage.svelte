<script lang="ts">
  import ComponentDescription from '$docs/components/ComponentDescription.svelte';
  import { siteMetadata } from '$docs/constants.js';
  import { Breadcrumbs, Container, Heading, SiteMetadata, type ContainerSize } from '@immich/ui';
  import { mdiSlashForward } from '@mdi/js';
  import type { Snippet } from 'svelte';

  type Props = {
    name: string;
    description?: string;
    size?: ContainerSize;
    children?: Snippet;
  };

  const { size = 'medium', name, description, children }: Props = $props();

  const page = {
    title: name,
    description: description || `The <code>${name}</code> component`,
  };
</script>

<SiteMetadata site={siteMetadata} {page} />

<div class="flex h-full flex-col">
  <Breadcrumbs
    items={[{ title: 'Home', href: '/' }, { title: 'Components' }, { title: name }]}
    separator={mdiSlashForward}
    class="border-b p-4"
  />

  <Container {size} class="flex flex-col p-4">
    <Heading tag="h1" size="large">{name}</Heading>
    {#if description}
      <ComponentDescription>{description}</ComponentDescription>
    {/if}
    {@render children?.()}
  </Container>
</div>
