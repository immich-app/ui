<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    ordered?: boolean;
    children: Snippet;
  };

  const { children, ordered }: Props = $props();
  const styles = 'list-outside ps-6 w-full flex flex-col gap-1';
</script>

{#if ordered}
  <ol class="list-decimal {styles}">
    {@render children?.()}
  </ol>
{:else}
  <ul class="list-disc {styles}">
    {@render children?.()}
  </ul>
{/if}
