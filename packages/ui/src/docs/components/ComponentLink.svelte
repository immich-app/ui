<script lang="ts">
  import { asComponentHref } from '$docs/utilities.js';
  import { Link } from '@immich/ui';

  type Props = {
    name: string;
  };

  const { name }: Props = $props();
</script>

<Link href={asComponentHref(name)}>{name}</Link>
