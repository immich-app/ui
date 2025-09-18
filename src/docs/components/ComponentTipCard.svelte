<script lang="ts">
  import { Alert } from '@immich/ui';
  import { mdiLightbulbOnOutline } from '@mdi/js';
  import type { Snippet } from 'svelte';

  type Props = {
    children: Snippet;
  };

  const { children }: Props = $props();
</script>

<Alert color="success" class="mt-4" title="Tip" icon={mdiLightbulbOnOutline}>
  {@render children()}
</Alert>
