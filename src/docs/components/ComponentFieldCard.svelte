<script lang="ts">
  import ComponentTipCard from '$docs/components/ComponentTipCard.svelte';
  import { asComponentHref } from '$docs/utilities.js';
  import { Link, Text } from '@immich/ui';
</script>

<ComponentTipCard>
  <Text
    >This component can be used with the <Link href={asComponentHref('Field')}>Field</Link> component to build forms</Text
  >
</ComponentTipCard>
