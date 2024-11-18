<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import Lorem from '$docs/components/Lorem.svelte';
	import { colors } from '$docs/constants.js';
	import Card from '$lib/components/Card/Card.svelte';
	import CardBody from '$lib/components/Card/CardBody.svelte';
	import CardHeader from '$lib/components/Card/CardHeader.svelte';
	import CardTitle from '$lib/components/Card/CardTitle.svelte';
	import { Alert } from '@immich/ui';
	import { mdiHelpCircleOutline } from '@mdi/js';
</script>

<DualThemeLayout name="Alert">
	{#snippet component()}
		<div class="flex flex-col gap-4">
			<section class="flex flex-col gap-4">
				<Card>
					<CardHeader>
						<CardTitle>Basic</CardTitle>
					</CardHeader>
					<CardBody>
						<div class="flex flex-wrap gap-4">
							{#each colors as color}
								<Alert {color} title="This is an alert" />
							{/each}
						</div>
					</CardBody>
				</Card>
			</section>

			<section class="flex flex-col gap-4">
				<Card>
					<CardHeader>
						<CardTitle>Colors</CardTitle>
					</CardHeader>
					<CardBody>
						<div class="flex flex-wrap gap-4">
							{#each colors as color}
								<Alert {color} title="This is an alert">
									<Lorem />
								</Alert>
							{/each}
						</div>
					</CardBody>
				</Card>
			</section>

			<section class="flex flex-col gap-4">
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
			</section>

			<section class="flex flex-col gap-4">
				<Card>
					<CardHeader>
						<CardTitle>Colors</CardTitle>
					</CardHeader>
					<CardBody>
						<div class="flex flex-wrap gap-4">
							{#each colors as color}
								<Alert {color} title="This is an alert">
									<Lorem />
								</Alert>
							{/each}
						</div>
					</CardBody>
				</Card>
			</section>
		</div>
	{/snippet}
</DualThemeLayout>
