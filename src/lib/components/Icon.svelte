<script lang="ts">
	import type { Color } from '$lib/types.js';
	import { cleanClass } from '$lib/utils.js';
	import type { AriaRole } from 'svelte/elements';

	type IconProps = {
		path: string;
		size?: string;
		color?: Color | 'currentColor' | string;
		flipped?: boolean;
		class?: string;
		viewBox?: string;
		role?: AriaRole;
		title?: string;
		description?: string;
		ariaHidden?: boolean;
		ariaLabel?: string;
		ariaLabelledby?: string;
		strokeWidth?: number;
		strokeColor?: string;
		spin?: false;
	};

	const {
		size = '1em',
		viewBox = '0 0 24 24',
		class: className = '',
		flipped = false,
		spin = false,
		role = 'img',
		ariaLabelledby,
		strokeColor = 'currentColor',
		strokeWidth = 2,
		ariaLabel = '',
		ariaHidden = false,
		title,
		path,
		color = 'currentColor',
		description,
	}: IconProps = $props();
</script>

<svg
	width={size}
	height={size}
	{viewBox}
	class={cleanClass(className, flipped && '-scale-x-100', spin && 'animate-spin')}
	{role}
	stroke={strokeColor}
	stroke-width={strokeWidth}
	aria-label={ariaLabel}
	aria-hidden={ariaHidden}
	aria-labelledby={ariaLabelledby}
>
	{#if title}
		<title>{title}</title>
	{/if}
	{#if description}
		<desc>{description}</desc>
	{/if}
	<path d={path} fill={color} />
</svg>
