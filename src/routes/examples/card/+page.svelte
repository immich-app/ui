<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import { Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle } from '@immich/ui';
</script>

<DualThemeLayout name="Card">
	{#snippet component()}
		<div class="flex flex-col gap-4">
			<section class="flex flex-col gap-4">
				<Card>
					<CardBody>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maxime illo sequi
							ipsam possimus rem harum nostrum esse itaque vero blanditiis eius sit ducimus
							doloremque, omnis, assumenda mollitia officia aliquid.
						</p>
					</CardBody>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Card with title</CardTitle>
					</CardHeader>
					<CardBody>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maxime illo sequi
							ipsam possimus rem harum nostrum esse itaque vero blanditiis eius sit ducimus
							doloremque, omnis, assumenda mollitia officia aliquid.
						</p>
					</CardBody>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Card with title and footer</CardTitle>
					</CardHeader>
					<CardBody>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maxime illo sequi
							ipsam possimus rem harum nostrum esse itaque vero blanditiis eius sit ducimus
							doloremque, omnis, assumenda mollitia officia aliquid.
						</p>
					</CardBody>
					<CardFooter>Footer goes here</CardFooter>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Card with title, description, and footer</CardTitle>
						<CardDescription>This is the description</CardDescription>
					</CardHeader>
					<CardBody>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maxime illo sequi
							ipsam possimus rem harum nostrum esse itaque vero blanditiis eius sit ducimus
							doloremque, omnis, assumenda mollitia officia aliquid.
						</p>
					</CardBody>
					<CardFooter>Footer</CardFooter>
				</Card>
			</section>
		</div>
	{/snippet}
</DualThemeLayout>
