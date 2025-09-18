<script lang="ts">
  import { Alert } from '@immich/ui';
  import type { Snippet } from 'svelte';

  type Props = {
    children: Snippet;
  };

  const { children }: Props = $props();
</script>

<Alert color="info" class="mt-4" title="Note">
  {@render children()}
</Alert>
