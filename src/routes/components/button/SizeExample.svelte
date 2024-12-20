<script lang="ts">
	import { Button, Heading, HStack, Stack } from '@immich/ui';
</script>

<HStack gap={4}>
	<Stack>
		<Heading size="tiny">Round</Heading>
		<div>
			<Button shape="round" size="tiny">Tiny</Button>
		</div>
		<div>
			<Button shape="round" size="small">Small</Button>
		</div>
		<div>
			<Button shape="round" size="medium">Medium</Button>
		</div>
		<div>
			<Button shape="round" size="large">Large</Button>
		</div>
		<div>
			<Button shape="round" size="giant">Giant</Button>
		</div>
	</Stack>
	<Stack>
		<Heading size="tiny">Semi-Rounded</Heading>
		<div>
			<Button size="tiny">Tiny</Button>
		</div>
		<div>
			<Button size="small">Small</Button>
		</div>
		<div>
			<Button size="medium">Medium</Button>
		</div>
		<div>
			<Button size="large">Large</Button>
		</div>
		<div>
			<Button size="giant">Giant</Button>
		</div>
	</Stack>
	<Stack>
		<Heading size="tiny">Rectangle</Heading>
		<div>
			<Button shape="rectangle" size="tiny">Tiny</Button>
		</div>
		<div>
			<Button shape="rectangle" size="small">Small</Button>
		</div>
		<div>
			<Button shape="rectangle" size="medium">Medium</Button>
		</div>
		<div>
			<Button shape="rectangle" size="large">Large</Button>
		</div>
		<div>
			<Button shape="rectangle" size="giant">Giant</Button>
		</div>
	</Stack>
</HStack>
