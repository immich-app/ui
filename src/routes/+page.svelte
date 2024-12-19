<script lang="ts">
	import ComponentCard from '$docs/components/ComponentCard.svelte';
	import Grid from '$docs/components/Grid.svelte';
	import { Heading, Link, Stack, Text } from '@immich/ui';
	import {
		mdiAlertCircleOutline,
		mdiApplicationOutline,
		mdiButtonCursor,
		mdiCardOutline,
		mdiCheckboxMarked,
		mdiCircleOutline,
		mdiCloseCircle,
		mdiFormatHeaderPound,
		mdiFormatText,
		mdiFormTextbox,
		mdiFormTextboxPassword,
		mdiHomeCircle,
		mdiImage,
		mdiLink,
		mdiListBoxOutline,
		mdiPartyPopper,
		mdiViewSequential,
	} from '@mdi/js';
</script>

<div class="max-w-screen-lg p-2">
	<Stack class="flex flex-col gap-4 px-8 py-8" gap={8}>
		<Heading size="large">@immich/ui</Heading>
		<Text>
			@immich/ui is a collection of <Link href="https://svelte.dev">Svelte</Link> components that are
			shared across all Immich projects. It is designed to be a simple and easy-to-use library that provides
			a consistent look and feel.
		</Text>

		<Heading size="large">Install</Heading>
		<Text>@immich/ui is published as an npm package. You can install it using npm.</Text>

		<div class="py-4">
			<code class="rounded-lg border border-dark p-4">npm i --save-dev @immich/ui</code>
		</div>

		<Heading size="large">Components</Heading>
		<Stack gap={8}>
			<Stack>
				<Heading size="medium">Layout</Heading>
				<Grid>
					<ComponentCard icon={mdiAlertCircleOutline} title="Alert" />
					<ComponentCard icon={mdiApplicationOutline} title="AppShell" />
					<ComponentCard icon={mdiCardOutline} title="Card" />
					<ComponentCard icon={mdiViewSequential} title="Stack" />
				</Grid>
			</Stack>

			<Stack>
				<Heading size="medium">Forms</Heading>

				<Grid>
					<ComponentCard icon={mdiButtonCursor} title="Button" />
					<ComponentCard icon={mdiHomeCircle} title="IconButton" />
					<ComponentCard icon={mdiCheckboxMarked} title="Checkbox" />
					<ComponentCard icon={mdiCloseCircle} title="CloseButton" />
					<ComponentCard icon={mdiListBoxOutline} title="Field" />
					<ComponentCard icon={mdiFormTextbox} title="Input" />
					<ComponentCard icon={mdiCircleOutline} title="LoadingSpinner" />
					<ComponentCard icon={mdiFormTextboxPassword} title="PasswordInput" />
				</Grid>
			</Stack>

			<Stack>
				<Heading size="medium">Text</Heading>

				<Grid>
					<ComponentCard icon={mdiFormatHeaderPound} title="Heading" />
					<ComponentCard icon={mdiFormatText} title="Text" />
					<ComponentCard icon={mdiLink} title="Link" />
				</Grid>
			</Stack>

			<Stack>
				<Heading size="medium">Immich</Heading>
				<Grid>
					<ComponentCard icon={mdiImage} title="Logo" />
					<ComponentCard icon={mdiPartyPopper} title="SupporterBadge" />
				</Grid>
			</Stack>
		</Stack>
	</Stack>
</div>
