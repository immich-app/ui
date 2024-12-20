<script lang="ts">
	import type { Theme } from '$docs/constants.js';
	import { Card, CardBody, HStack, Logo, Stack } from '@immich/ui';

	type Props = {
		theme: Theme;
	};

	let { theme }: Props = $props();
</script>

<Stack>
	<Card color="secondary" variant="subtle">
		<CardBody>
			<HStack>
				<Logo size="tiny" {theme} variant="logo"></Logo>
				<Logo size="tiny" {theme} variant="logo"></Logo>
				<Logo size="tiny" {theme} variant="logo"></Logo>
			</HStack>
		</CardBody>
	</Card>

	<Card color="secondary" variant="subtle">
		<CardBody>
			<HStack>
				<Logo size="small" {theme} variant="logo"></Logo>
				<Logo size="small" {theme} variant="logo"></Logo>
				<Logo size="small" {theme} variant="logo"></Logo>
			</HStack>
		</CardBody>
	</Card>

	<Card color="secondary" variant="subtle">
		<CardBody>
			<HStack>
				<Logo size="medium" {theme} variant="logo"></Logo>
				<Logo size="medium" {theme} variant="logo"></Logo>
				<Logo size="medium" {theme} variant="logo"></Logo>
			</HStack>
		</CardBody>
	</Card>

	<Card color="secondary" variant="subtle">
		<CardBody>
			<HStack>
				<Logo size="large" {theme} variant="logo"></Logo>
				<Logo size="large" {theme} variant="logo"></Logo>
				<Logo size="large" {theme} variant="logo"></Logo>
			</HStack>
		</CardBody>
	</Card>

	<Card color="secondary" variant="subtle">
		<CardBody>
			<HStack>
				<Logo size="giant" {theme} variant="logo"></Logo>
				<Logo size="giant" {theme} variant="logo"></Logo>
				<Logo size="giant" {theme} variant="logo"></Logo>
			</HStack>
		</CardBody>
	</Card>

	<Card color="secondary" variant="subtle">
		<CardBody>
			<HStack>
				<Logo size="landing" {theme} variant="logo"></Logo>
				<Logo size="landing" {theme} variant="logo"></Logo>
				<Logo size="landing" {theme} variant="logo"></Logo>
			</HStack>
		</CardBody>
	</Card>
</Stack>
