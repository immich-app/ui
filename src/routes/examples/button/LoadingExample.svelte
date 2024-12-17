<script lang="ts">
	import { Button, HStack, Stack } from '@immich/ui';
</script>

<Stack>
	<HStack>
		<Button color="primary" loading>Primary</Button>
		<Button color="secondary" loading>Secondary</Button>
		<Button color="success" loading>Success</Button>
		<Button color="info" loading>Info</Button>
		<Button color="warning" loading>Warning</Button>
		<Button color="danger" loading>Danger</Button>
	</HStack>
	<HStack>
		<Button variant="ghost" color="primary" loading>Primary</Button>
		<Button variant="ghost" color="secondary" loading>Secondary</Button>
		<Button variant="ghost" color="success" loading>Success</Button>
		<Button variant="ghost" color="info" loading>Info</Button>
		<Button variant="ghost" color="warning" loading>Warning</Button>
		<Button variant="ghost" color="danger" loading>Danger</Button>
	</HStack>
	<HStack>
		<Button variant="outline" color="primary" loading>Primary</Button>
		<Button variant="outline" color="secondary" loading>Secondary</Button>
		<Button variant="outline" color="success" loading>Success</Button>
		<Button variant="outline" color="info" loading>Info</Button>
		<Button variant="outline" color="warning" loading>Warning</Button>
		<Button variant="outline" color="danger" loading>Danger</Button>
	</HStack>
</Stack>
