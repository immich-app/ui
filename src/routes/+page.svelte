<script lang="ts">
	import ComponentCard from '$docs/components/ComponentCard.svelte';
	import Grid from '$docs/components/Grid.svelte';
	import Navbar from '$docs/components/Navbar.svelte';
	import { Card, CardBody, CardHeader, Heading, Link, Stack, Text } from '@immich/ui';
	import {
		mdiAlertCircleOutline,
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

<main class="dark bg-light text-dark">
	<Navbar />

	<div class="mx-auto max-w-screen-lg p-2">
		<Stack class="flex flex-col gap-4 px-8 py-8" gap={8}>
			<Card variant="subtle">
				<CardHeader>
					<Heading size="large">@immich/ui</Heading>
				</CardHeader>
				<CardBody>
					@immich/ui is a collection of <Link href="https://svelte.dev">Svelte</Link> components that
					are shared across all Immich projects. It is designed to be a simple and easy-to-use library
					that provides a consistent look and feel.
				</CardBody>
			</Card>

			<Card variant="subtle">
				<CardHeader>
					<Heading size="large">Install</Heading>
				</CardHeader>
				<CardBody>
					<Stack>
						<Text>@immich/ui is published as an npm package. You can install it using npm.</Text>

						<div class="py-4">
							<code class="rounded-lg border border-dark p-4">npm i --save-dev @immich/ui</code>
						</div>
					</Stack>
				</CardBody>
			</Card>

			<Card variant="subtle">
				<CardHeader>
					<Heading size="large">Components</Heading>
				</CardHeader>
				<CardBody>
					<Stack gap={8}>
						<Stack>
							<Heading size="medium">Layout</Heading>
							<Grid>
								<ComponentCard icon={mdiAlertCircleOutline} title="Alert" />
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
				</CardBody>
			</Card>
		</Stack>
	</div>
</main>
