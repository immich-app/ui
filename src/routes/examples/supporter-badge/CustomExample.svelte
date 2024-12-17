<script lang="ts">
	import { Stack, SupporterBadge, Heading, Logo } from '@immich/ui';
</script>

<Stack>
	<Stack class="w-[250px]">
		<SupporterBadge effect="always" text="Buy Immich" />
	</Stack>

	<Stack>
		<Heading size="tiny">Title</Heading>
		<SupporterBadge effect="always">
			<Logo size="large" variant="icon" />
			<Heading size="large" color="primary">Purchase Immich</Heading>
		</SupporterBadge>
	</Stack>
</Stack>
