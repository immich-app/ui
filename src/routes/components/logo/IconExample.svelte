<script lang="ts">
	import { Theme } from '$docs/constants.js';
	import { Logo } from '@immich/ui';

	type Props = {
		theme: Theme;
	};
	let { theme }: Props = $props();
</script>

<Logo size="tiny" {theme} variant="icon"></Logo>
<Logo size="small" {theme} variant="icon"></Logo>
<Logo size="medium" {theme} variant="icon"></Logo>
<Logo size="large" {theme} variant="icon"></Logo>
<Logo size="giant" {theme} variant="icon"></Logo>
<Logo size="landing" {theme} variant="icon"></Logo>
