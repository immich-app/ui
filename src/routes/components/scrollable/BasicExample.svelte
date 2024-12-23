<script lang="ts">
	import Lorem from '$docs/components/Lorem.svelte';
	import { Heading, Scrollable, Stack, Text } from '@immich/ui';
</script>

<Stack gap={4}>
	<Heading size="tiny">Vertical</Heading>
	<div class="h-64 w-32">
		<Scrollable>
			<Text>
				<Lorem count={5} />
			</Text>
		</Scrollable>
	</div>

	<Heading size="tiny">Horizontal</Heading>
	<Scrollable>
		<Text class="h-8 w-[2000px]">
			<Lorem />
		</Text>
	</Scrollable>
</Stack>
