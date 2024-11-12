<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import CardBody from '$lib/components/CardBody.svelte';
	import CardDescription from '$lib/components/CardDescription.svelte';
	import CardFooter from '$lib/components/CardFooter.svelte';
	import CardHeader from '$lib/components/CardHeader.svelte';
	import CardTitle from '$lib/components/CardTitle.svelte';
</script>

<div class="flex flex-col gap-4">
	<section class="flex flex-col gap-4">
		<Card>
			<CardBody>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maxime illo sequi
					ipsam possimus rem harum nostrum esse itaque vero blanditiis eius sit ducimus doloremque,
					omnis, assumenda mollitia officia aliquid.
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
					ipsam possimus rem harum nostrum esse itaque vero blanditiis eius sit ducimus doloremque,
					omnis, assumenda mollitia officia aliquid.
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
					ipsam possimus rem harum nostrum esse itaque vero blanditiis eius sit ducimus doloremque,
					omnis, assumenda mollitia officia aliquid.
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
					ipsam possimus rem harum nostrum esse itaque vero blanditiis eius sit ducimus doloremque,
					omnis, assumenda mollitia officia aliquid.
				</p>
			</CardBody>
			<CardFooter>Footer</CardFooter>
		</Card>
	</section>
</div>
