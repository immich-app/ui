<script lang="ts">
	import { Theme } from '$docs/constants.js';
	import { Logo } from '@immich/ui';

	type Props = {
		theme: Theme;
	};
	let { theme }: Props = $props();
</script>

<Logo size="tiny" {theme} variant="inline"></Logo>
<Logo size="small" {theme} variant="inline"></Logo>
<Logo size="medium" {theme} variant="inline"></Logo>
<Logo size="large" {theme} variant="inline"></Logo>
<Logo size="giant" {theme} variant="inline"></Logo>
<Logo size="landing" {theme} variant="inline"></Logo>
