<script lang="ts">
  import { ChildKey } from '$lib/constants.js';
  import Child from '$lib/internal/Child.svelte';
  import type { ChildData } from '$lib/types.js';

  let props: ChildData = $props();
</script>

<Child for={ChildKey.Modal} as={ChildKey.ModalHeader} {...props} />
