<script lang="ts">
  type Props = {
    src: string;
    alt?: string;
    title?: string;
  };

  const { src, alt, title }: Props = $props();
</script>

<figure>
  <img {src} {alt} {title} />
  {#if alt}
    <figcaption class="text-muted p-1 text-center text-sm italic">{alt}</figcaption>
  {/if}
</figure>
