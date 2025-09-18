<script lang="ts">
  import { Stack, Textarea } from '@immich/ui';

  const rows = 5;
</script>

<Stack>
  <Textarea
    grow
    value="This textarea will automatically grow and shrink based on the size of the content"
  ></Textarea>
  <Textarea grow rows={5} value="With rows={rows}, this will never get smaller than {rows} rows."
  ></Textarea>
</Stack>
