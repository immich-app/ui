<script lang="ts">
  import { Button, type Size } from '@immich/ui';
  import type { Snippet } from 'svelte';

  type Props = {
    child: Snippet<[{ onClose: () => void }]>;
    size?: Size;
  };

  const { child, size = 'small' }: Props = $props();

  let isOpen = $state(true);

  const onReset = () => (isOpen = true);
  const onClose = () => (isOpen = false);
</script>

{#if isOpen}
  {@render child({ onClose })}
{:else}
  <Button {size} color="secondary" onclick={onReset}>Reset</Button>
{/if}
