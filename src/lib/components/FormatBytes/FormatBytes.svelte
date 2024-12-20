<script lang="ts">
	import { getBytesWithUnit } from '$lib/utilities/byte-units.js';

	type Props = {
		bytes: number;
		precision?: number;
		variant?: 'short' | 'narrow';
	};

	const { bytes, precision, variant = 'short' }: Props = $props();

	const [value, unit] = $derived(getBytesWithUnit(bytes, precision));
	const separator = $derived(variant === 'narrow' ? '' : ' ');
</script>

<span>{value}{separator}{unit}</span>
