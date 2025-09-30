<script lang="ts">
  import { resolve } from '$app/paths';
  import ComponentDescription from '$docs/components/ComponentDescription.svelte';
  import { siteMetadata } from '$docs/constants.js';
  import { Container, Heading, SiteMetadata, type ContainerSize } from '@immich/ui';
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
  <!-- TODO replace with breadcrumb component -->
  <nav class="bg-light text-dark flex shrink-0 justify-between border-b p-4">
    <div class="flex items-center gap-2">
      <a href={resolve('/')} class="underline">Home</a>
      <span>/</span>
      <a href={resolve('/')} class="underline">Components</a>
      <span>/</span>
      <span class="capitalize">{name}</span>
    </div>
  </nav>

  <Container {size} class="flex flex-col p-4">
    <Heading tag="h1" size="large">{name}</Heading>
    {#if description}
      <ComponentDescription>{description}</ComponentDescription>
    {/if}
    {@render children?.()}
  </Container>
</div>
