<script lang="ts">
	import { Stack, Heading, SupporterBadge } from '@immich/ui';
</script>

<Stack class="w-[200px]">
	<Heading tag="p" size="tiny">On Hover</Heading>
	<SupporterBadge />

	<Heading tag="p" size="tiny">Always</Heading>
	<SupporterBadge effect="always" />
</Stack>
