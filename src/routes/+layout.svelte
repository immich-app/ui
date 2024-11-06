<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class="m-4 p-4">
	{@render children()}
</main>
