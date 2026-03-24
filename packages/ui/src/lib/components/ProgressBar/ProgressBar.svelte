<script lang="ts">
  import ProgressBar, { type Props as InternalProps } from '$lib/internal/ProgressBar.svelte';

  type Props = Omit<InternalProps, 'type'> & {
    progress?: number;
  };

  let { progress, value, ...props }: Props = $props();
</script>

<ProgressBar type="progress" value={progress ?? value} {...props} />
