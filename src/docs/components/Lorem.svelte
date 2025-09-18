<script lang="ts">
  type Props = { count?: number };
  const { count = 1 }: Props = $props();

  const lorem =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsam tenetur accusantium impedit beatae omnis necessitatibus. Voluptatum blanditiis libero impedit, harum eius inventore nihil, officia voluptate dolorum error consequatur animi.';

  const make = (value: number) => {
    let content = '';
    for (let i = 0; i < value; i++) {
      content += lorem;
    }
    return content;
  };

  const text = $derived(make(count));
</script>

{text}
