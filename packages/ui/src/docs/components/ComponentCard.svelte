<script lang="ts">
  import { asComponentHref } from '$docs/utilities.js';
  import { Button, Icon, Text, VStack, type IconLike } from '@immich/ui';

  type Props = {
    component: { name: string; icon: IconLike };
  };

  const { component }: Props = $props();
</script>

<Button
  href={asComponentHref(component.name)}
  variant="outline"
  color="secondary"
  class="border-light-300 h-24 w-44 rounded-2xl border "
  size="large"
>
  <VStack gap={2}>
    <Icon icon={component.icon} size="1.5rem" aria-hidden />
    <Text size="small">{component.name}</Text>
  </VStack>
</Button>
