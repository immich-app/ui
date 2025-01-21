<script lang="ts">
	import { Button, Code, Heading } from '@immich/ui';
</script>

<section class="container">
	<!-- Size Column -->
	<div class="size-header">
		<Heading size="tiny">Size</Heading>
	</div>
	<div class="text-tiny">
		<Code size="tiny">Tiny</Code>
	</div>
	<div class="text-small">
		<Code size="tiny">Small</Code>
	</div>
	<div class="text-medium">
		<Code size="tiny">Medium</Code>
	</div>
	<div class="text-large">
		<Code size="tiny">Large</Code>
	</div>
	<div class="text-giant">
		<Code size="tiny">Giant</Code>
	</div>

	<!-- Round Column -->
	<div class="round-button-header">
		<Heading size="tiny">Round</Heading>
	</div>
	<div class="round-button-tiny">
		<Button shape="round" size="tiny">Click me</Button>
	</div>
	<div class="round-button-small">
		<Button shape="round" size="small">Click me</Button>
	</div>
	<div class="round-button-medium">
		<Button shape="round" size="medium">Click me</Button>
	</div>
	<div class="round-button-large">
		<Button shape="round" size="large">Click me</Button>
	</div>
	<div class="round-button-giant">
		<Button shape="round" size="giant">Click me</Button>
	</div>

	<!-- Semi-Round Column -->
	<div class="semi-round-button-header">
		<Heading size="tiny">Semi-Rounded</Heading>
	</div>
	<div class="semi-round-button-tiny">
		<Button size="tiny">Click me</Button>
	</div>
	<div class="semi-round-button-small">
		<Button size="small">Click me</Button>
	</div>
	<div class="semi-round-button-medium">
		<Button size="medium">Click me</Button>
	</div>
	<div class="semi-round-button-large">
		<Button size="large">Click me</Button>
	</div>
	<div class="semi-round-button-giant">
		<Button size="giant">Click me</Button>
	</div>

	<!-- Rectangle Column -->
	<div class="rectangle-button-header">
		<Heading size="tiny">Rectangle</Heading>
	</div>
	<div class="rec-button-tiny">
		<Button shape="rectangle" size="tiny">Click me</Button>
	</div>
	<div class="rec-button-small">
		<Button shape="rectangle" size="small">Click me</Button>
	</div>
	<div class="rec-button-medium">
		<Button shape="rectangle" size="medium">Click me</Button>
	</div>
	<div class="rec-button-large">
		<Button shape="rectangle" size="large">Click me</Button>
	</div>
	<div class="rec-button-giant">
		<Button shape="rectangle" size="giant">Click me</Button>
	</div>
</section>

<style>
	.container {
		display: grid;
		align-items: center;
		grid-template-columns: 0.5fr 1fr 1fr 1fr;
		grid-template-rows: 60px 40px 40px 55px 55px 70px;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'size-header round-button-header semi-round-button-header rectangle-button-header'
			'text-tiny round-button-tiny semi-round-button-tiny rec-button-tiny'
			'text-small round-button-small semi-round-button-small rec-button-small'
			'text-medium round-button-medium semi-round-button-medium rec-button-medium'
			'text-large round-button-large semi-round-button-large rec-button-large'
			'text-giant round-button-giant semi-round-button-giant rec-button-giant';
	}

	.size-header {
		grid-area: size-header;
	}

	.round-button-header {
		grid-area: round-button-header;
	}

	.semi-round-button-header {
		grid-area: semi-round-button-header;
	}

	.rectangle-button-header {
		grid-area: rectangle-button-header;
	}

	.text-tiny {
		grid-area: text-tiny;
	}

	.text-small {
		grid-area: text-small;
	}

	.text-medium {
		grid-area: text-medium;
	}

	.text-large {
		grid-area: text-large;
	}

	.text-giant {
		grid-area: text-giant;
	}

	.round-button-tiny {
		grid-area: round-button-tiny;
	}

	.round-button-small {
		grid-area: round-button-small;
	}

	.round-button-medium {
		grid-area: round-button-medium;
	}

	.round-button-large {
		grid-area: round-button-large;
	}

	.round-button-giant {
		grid-area: round-button-giant;
	}

	.semi-round-button-tiny {
		grid-area: semi-round-button-tiny;
	}

	.semi-round-button-small {
		grid-area: semi-round-button-small;
	}

	.semi-round-button-medium {
		grid-area: semi-round-button-medium;
	}

	.semi-round-button-large {
		grid-area: semi-round-button-large;
	}

	.semi-round-button-giant {
		grid-area: semi-round-button-giant;
	}

	.rec-button-tiny {
		grid-area: rec-button-tiny;
	}

	.rec-button-small {
		grid-area: rec-button-small;
	}

	.rec-button-medium {
		grid-area: rec-button-medium;
	}

	.rec-button-large {
		grid-area: rec-button-large;
	}

	.rec-button-giant {
		grid-area: rec-button-giant;
	}
</style>
