<script lang="ts">
	import { Button, Code, Heading } from '@immich/ui';
</script>

<section class="grid grid-cols-[70px_1fr_1fr_1fr] gap-4">
	<!-- Size Column -->
	<div class="grid grid-cols-1 grid-rows-6 place-items-center justify-items-start gap-2">
		<Heading tag="p" size="tiny">Size</Heading>
		<Code size="tiny">Tiny</Code>
		<Code size="tiny">Small</Code>
		<Code size="tiny">Medium</Code>
		<Code size="tiny">Large</Code>
		<Code size="tiny">Giant</Code>
	</div>

	<!-- Round Column -->
	<div class="grid grid-cols-1 grid-rows-6 place-items-center justify-items-start gap-2">
		<Heading tag="p" size="tiny">Round</Heading>
		<Button shape="round" size="tiny">Click me</Button>
		<Button shape="round" size="small">Click me</Button>
		<Button shape="round" size="medium">Click me</Button>
		<Button shape="round" size="large">Click me</Button>
		<Button shape="round" size="giant">Click me</Button>
	</div>

	<!-- Semi-Round Column -->
	<div class="grid grid-cols-1 grid-rows-6 place-items-center justify-items-start gap-2">
		<Heading tag="p" size="tiny">Semi-Rounded</Heading>
		<Button size="tiny">Click me</Button>
		<Button size="small">Click me</Button>
		<Button size="medium">Click me</Button>
		<Button size="large">Click me</Button>
		<Button size="giant">Click me</Button>
	</div>

	<!-- Rectangle Column -->
	<div class="grid grid-cols-1 grid-rows-6 place-items-center justify-items-start gap-2">
		<Heading tag="p" size="tiny">Rectangle</Heading>
		<Button shape="rectangle" size="tiny">Click me</Button>
		<Button shape="rectangle" size="small">Click me</Button>
		<Button shape="rectangle" size="medium">Click me</Button>
		<Button shape="rectangle" size="large">Click me</Button>
		<Button shape="rectangle" size="giant">Click me</Button>
	</div>
</section>
