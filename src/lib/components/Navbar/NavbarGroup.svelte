<script lang="ts">
	type Props = {
		title: string;
	};

	let { title }: Props = $props();
</script>

<div class="text-xs transition-all duration-200">
	<p class="hidden px-6 py-4 uppercase group-hover:sm:block md:block">{title}</p>
	<hr class="mx-4 mb-[31px] mt-8 block group-hover:sm:hidden md:hidden" />
</div>
