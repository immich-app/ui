<script lang="ts">
  import ComponentSizes from '$docs/components/ComponentSizes.svelte';
  import Text from '$lib/internal/Text.svelte';
  import { Card, CardBody, HStack, Logo, Stack } from '@immich/ui';
</script>

<Stack>
  <ComponentSizes>
    {#snippet child({ size, label })}
      <Card color="secondary">
        <CardBody>
          <Text class="mb-1" fontWeight="bold">{label}</Text>
          <HStack>
            <Logo {size} variant="logo" />
            <Logo {size} variant="logo" />
            <Logo {size} variant="logo" />
          </HStack>
        </CardBody>
      </Card>
    {/snippet}
  </ComponentSizes>
</Stack>
