<script>
  import { HStack, ProgressBar, Text } from '@immich/ui';
  import { onMount } from 'svelte';

  const items = [0, 0, 0, 0.1, 0.2, 0.3, 1, 1, 1, 1];
  let index = $state(0);

  const onTick = () => {
    index += 1;
    index = index % items.length;
  };

  const progress = $derived(items[index]);

  onMount(() => {
    const internal = setInterval(onTick, 500);
    return () => clearInterval(internal);
  });
</script>

<HStack wrap>
  <ProgressBar {progress}>
    <Text size="small" class={progress > 0.5 ? 'text-light' : 'text-dark'}>Loading...</Text>
  </ProgressBar>
</HStack>
