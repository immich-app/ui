<script lang="ts">
	import { Theme } from '$docs/constants.js';
	import { Logo } from '@immich/ui';

	type Props = {
		theme: Theme;
	};

	let { theme }: Props = $props();
</script>

<Logo size="tiny" {theme} variant="stacked"></Logo>
<Logo size="small" {theme} variant="stacked"></Logo>
<Logo size="medium" {theme} variant="stacked"></Logo>
<Logo size="large" {theme} variant="stacked"></Logo>
<Logo size="giant" {theme} variant="stacked"></Logo>
<Logo size="landing" {theme} variant="stacked"></Logo>
