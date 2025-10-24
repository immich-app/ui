<script lang="ts">
  import ComponentSizes from '$docs/components/ComponentSizes.svelte';
  import { Button, Code, Heading } from '@immich/ui';
</script>

<section class="grid grid-cols-[70px_1fr_1fr_1fr] gap-4">
  <!-- Size Column -->
  <div class="grid grid-cols-1 grid-rows-6 place-items-center justify-items-start gap-2">
    <Heading size="tiny">Size</Heading>
    <ComponentSizes>
      {#snippet child({ label })}
        <Code size="tiny">{label}</Code>
      {/snippet}
    </ComponentSizes>
  </div>

  <!-- Round Column -->
  <div class="grid grid-cols-1 grid-rows-6 place-items-center justify-items-start gap-2">
    <Heading size="tiny">Round</Heading>

    <ComponentSizes>
      {#snippet child({ size })}
        <Button shape="round" {size}>Click me</Button>
      {/snippet}
    </ComponentSizes>
  </div>

  <!-- Semi-Round Column -->
  <div class="grid grid-cols-1 grid-rows-6 place-items-center justify-items-start gap-2">
    <Heading size="tiny">Semi-Rounded</Heading>
    <ComponentSizes>
      {#snippet child({ size })}
        <Button shape="semi-round" {size}>Click me</Button>
      {/snippet}
    </ComponentSizes>
  </div>

  <!-- Rectangle Column -->
  <div class="grid grid-cols-1 grid-rows-6 place-items-center justify-items-start gap-2">
    <Heading size="tiny">Rectangle</Heading>
    <ComponentSizes>
      {#snippet child({ size })}
        <Button shape="rectangle" {size}>Click me</Button>
      {/snippet}
    </ComponentSizes>
  </div>
</section>
