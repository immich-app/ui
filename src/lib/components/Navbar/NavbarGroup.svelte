<script lang="ts">
  type Props = {
    title: string;
  };

  let { title }: Props = $props();
</script>

<div class="text-sm transition-all duration-200 md:text-sm">
  <p class="py-2 ps-4">{title}</p>
</div>
