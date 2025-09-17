<script lang="ts">
	import { Stack, Textarea } from '@immich/ui';

	const lorem = `The quick brown fox jumps over the lazy dog`;
</script>

<Stack>
	<Textarea size="tiny" value={lorem}></Textarea>
	<Textarea size="small" value={lorem}></Textarea>
	<Textarea size="medium" value={lorem}></Textarea>
	<Textarea size="large" value={lorem}></Textarea>
	<Textarea size="giant" value={lorem}></Textarea>
</Stack>
