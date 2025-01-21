<script lang="ts">
	import { Button, HStack } from '@immich/ui';
	import { mdiCheckAll } from '@mdi/js';
</script>

<HStack wrap>
	<Button leadingIcon={mdiCheckAll}>Leading</Button>
	<Button trailingIcon={mdiCheckAll}>Trailing</Button>
	<Button leadingIcon={mdiCheckAll} trailingIcon={mdiCheckAll}>Both</Button>
</HStack>
