<script lang="ts">
	type Props = { count?: number };
	const { count = 1 }: Props = $props();
</script>

{#each Array(count) as i}
	<p data-index={i}>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsam tenetur accusantium impedit
		beatae omnis necessitatibus. Voluptatum blanditiis libero impedit, harum eius inventore nihil,
		officia voluptate dolorum error consequatur animi.
	</p>
{/each}
