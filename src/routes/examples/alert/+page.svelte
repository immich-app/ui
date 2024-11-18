<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import Lorem from '$docs/components/Lorem.svelte';
	import { colors } from '$docs/constants.js';
	import { Alert, Card, CardBody, CardHeader, CardTitle, VStack } from '@immich/ui';
	import { mdiHelpCircleOutline } from '@mdi/js';
</script>

<DualThemeLayout name="Alert">
	{#snippet component()}
		<Card>
			<CardHeader>
				<CardTitle>Basic</CardTitle>
			</CardHeader>
			<CardBody>
				<VStack>
					{#each colors as color}
						<Alert {color} title="This is an alert" />
					{/each}
				</VStack>
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Colors</CardTitle>
			</CardHeader>
			<CardBody>
				<VStack>
					{#each colors as color}
						<Alert {color} title="This is an alert">
							<Lorem />
						</Alert>
					{/each}
				</VStack>
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Custom icon</CardTitle>
			</CardHeader>
			<CardBody>
				<Alert icon={mdiHelpCircleOutline} title="This is an alert">
					<Lorem />
				</Alert>
			</CardBody>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Colors</CardTitle>
			</CardHeader>
			<CardBody>
				<VStack>
					{#each colors as color}
						<Alert {color} title="This is an alert">
							<Lorem />
						</Alert>
					{/each}
				</VStack>
			</CardBody>
		</Card>
	{/snippet}
</DualThemeLayout>
