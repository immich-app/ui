<script lang="ts">
  import placeholderImage from '$lib/assets/placeholder-image.svg';
  import Button from '$lib/components/Button/Button.svelte';
  import Heading from '$lib/components/Heading/Heading.svelte';
  import Text from '$lib/components/Text/Text.svelte';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    src?: string;
    title?: string;
    subtitle?: string;
    class?: string;
    onClick?: () => void;
    alt: string;
  };

  const { src = placeholderImage, class: className, alt, title, subtitle, onClick }: Props = $props();
</script>

{#snippet placeholder()}
  <img {src} {alt} draggable="false" />
  <div class="flex flex-col gap-4 text-center">
    {#if title}
      <Heading>
        {title}
      </Heading>
    {/if}
    {#if subtitle}
      <Text>{subtitle}</Text>
    {/if}
  </div>
{/snippet}

{#if onClick}
  <Button class={twMerge('text-dark bg-subtle flex flex-col items-center', className)} onclick={onClick}>
    {@render placeholder()}
  </Button>
{:else}
  <div class={twMerge('bg-subtle flex flex-col items-center rounded-3xl p-4', className)}>
    {@render placeholder()}
  </div>
{/if}
