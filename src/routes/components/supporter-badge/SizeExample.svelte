<script lang="ts">
	import { Stack, Heading, SupporterBadge } from '@immich/ui';
</script>

<Stack>
	<Stack class="w-[250px]">
		<Heading tag="p" size="tiny" class="capitalize">tiny</Heading>
		<SupporterBadge size="tiny" effect="always" />
	</Stack>

	<Stack class="w-[250px]">
		<Heading tag="p" size="tiny" class="capitalize">small</Heading>
		<SupporterBadge size="small" effect="always" />
	</Stack>

	<Stack class="w-[250px]">
		<Heading tag="p" size="tiny" class="capitalize">medium</Heading>
		<SupporterBadge size="medium" effect="always" />
	</Stack>

	<Stack class="w-[250px]">
		<Heading tag="p" size="tiny" class="capitalize">large</Heading>
		<SupporterBadge size="large" effect="always" />
	</Stack>

	<Stack class="w-[250px]">
		<Heading tag="p" size="tiny" class="capitalize">giant</Heading>
		<SupporterBadge size="giant" effect="always" />
	</Stack>
</Stack>
