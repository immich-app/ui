<script lang="ts">
	import IconButton from '$lib/components/IconButton/IconButton.svelte';
	import { theme } from '$lib/services/theme.svelte.js';
	import { Theme, type Size, type Variants } from '$lib/types.js';
	import { cleanClass } from '$lib/utils.js';
	import { mdiWeatherNight, mdiWeatherSunny } from '@mdi/js';

	type Props = {
		size?: Size;
		class?: string;
		variant?: Variants;
		onChange?: (theme: Theme) => void;
	};

	const { variant = 'ghost', size, class: className, onChange }: Props = $props();

	const handleToggleTheme = () => {
		theme.value = theme.value === Theme.Dark ? Theme.Light : Theme.Dark;
		onChange?.(theme.value);
	};

	const themeIcon = $derived(theme.value === Theme.Light ? mdiWeatherSunny : mdiWeatherNight);
</script>

<IconButton
	shape="round"
	color="primary"
	{size}
	{variant}
	icon={themeIcon}
	onclick={handleToggleTheme}
	class={cleanClass(className)}
/>
