<script lang="ts">
  import ProgressBar, { type Props } from '$lib/internal/ProgressBar.svelte';

  let props: Omit<Props, 'type'> = $props();
</script>

<ProgressBar type="meter" {...props} />
