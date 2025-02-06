<script lang="ts">
	import {
		Card,
		Container,
		Heading,
		HStack,
		Icon,
		Link,
		Stack,
		Text,
		ThemeSwitcher,
		VStack,
	} from '@immich/ui';
	import {
		mdiAndroid,
		mdiApple,
		mdiGithub,
		mdiMessageOutline,
		mdiOfficeBuildingOutline,
		mdiReddit,
		mdiServerOutline,
		mdiWeb,
	} from '@mdi/js';
</script>

<div class="mt-16 rounded-t-3xl bg-dark/10 p-8">
	<Container size="medium" center class="lg:py-8">
		<Stack gap={8}>
			<div class="place-center grid grid-cols-2 gap-8 lg:grid-cols-4">
				<Stack>
					<Heading size="tiny">Social</Heading>
					<Link
						href="https://github.com/immich-app/immich"
						target="_blank"
						rel="noopener noreferrer"
					>
						<HStack>
							<Icon icon={mdiGithub} size="1.5em" />
							<Text>GitHub</Text>
						</HStack>
					</Link>
					<Link href="https://discord.immich.app/" target="_blank" rel="noopener noreferrer">
						<HStack>
							<Icon icon={mdiMessageOutline} size="1.5em" />
							<Text>Discord</Text>
						</HStack>
					</Link>
					<Link href="https://www.reddit.com/r/immich/" target="_blank" rel="noopener noreferrer">
						<HStack>
							<Icon icon={mdiReddit} size="1.5em" />
							<Text>Reddit</Text>
						</HStack>
					</Link>
				</Stack>

				<Stack>
					<Heading size="tiny">Download</Heading>
					<Link
						href="https://play.google.com/store/apps/details?id=app.alextran.immich"
						target="_blank"
						rel="noopener noreferrer"
					>
						<HStack>
							<Icon icon={mdiAndroid} size="1.5em" />
							<Text>Android</Text>
						</HStack>
					</Link>
					<Link
						href="https://apps.apple.com/us/app/immich/id1613945652"
						target="_blank"
						rel="noopener noreferrer"
					>
						<HStack>
							<Icon icon={mdiApple} size="1.5em" />
							<Text>iOS</Text>
						</HStack>
					</Link>
					<Link
						href="https://get.immich.app/docker-compose"
						target="_blank"
						rel="noopener noreferrer"
					>
						<HStack>
							<Icon icon={mdiServerOutline} size="1.5em" />
							<Text>Server</Text>
						</HStack>
					</Link>
				</Stack>

				<Stack>
					<Heading size="tiny">Sites</Heading>
					<Link href="https://immich.app" target="_blank" rel="noopener noreferrer">
						<HStack>
							<Icon icon={mdiWeb} size="1.5em" />
							<Text>Documentation</Text>
						</HStack>
					</Link>
					<Link href="https://buy.immich.app" target="_blank" rel="noopener noreferrer">
						<HStack>
							<Icon icon={mdiWeb} size="1.5em" />
							<Text>Buy Immich</Text>
						</HStack>
					</Link>
					<Link href="https://my.immich.app" target="_blank" rel="noopener noreferrer">
						<HStack>
							<Icon icon={mdiWeb} size="1.5em" />
							<Text>My Immich</Text>
						</HStack>
					</Link>
				</Stack>

				<Stack>
					<Heading size="tiny">Company</Heading>
					<Link href="https://futo.org/" target="_blank" rel="noopener noreferrer">
						<HStack>
							<Icon icon={mdiOfficeBuildingOutline} size="1.5em" />
							<Text>FUTO</Text>
						</HStack>
					</Link>
				</Stack>
			</div>
			<Card>
				<img src="/img/social-preview.webp" alt="Social Preview" />
			</Card>
			<VStack class="text-center">
				<Text size="large">This project is available under GNU AGPL v3 license.</Text>
				<Text color="muted" variant="italic">Privacy should not be a luxury</Text>
				<ThemeSwitcher color="secondary" size="large" />
			</VStack>
		</Stack>
	</Container>
</div>
