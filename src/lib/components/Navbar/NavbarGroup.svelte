<script lang="ts">
	type Props = {
		title: string;
	};

	let { title }: Props = $props();
</script>

<div class="text-sm transition-all duration-200 md:text-sm">
	<p class="py-2 pl-4 uppercase">{title}</p>
</div>
