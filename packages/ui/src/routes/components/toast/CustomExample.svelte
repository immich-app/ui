<script lang="ts">
  import { Button, ToastContainer, ToastContent } from '@immich/ui';

  type Props = {
    onClose?: () => void;
  };

  const { onClose }: Props = $props();
</script>

<ToastContainer color="primary">
  <ToastContent color="primary" title="New album" description="Created Immich is awesome" {onClose}>
    <div class="flex justify-end gap-2 px-2 pb-2">
      <Button color="danger" variant="ghost" size="small">Delete</Button>
      <Button color="primary" size="small">View Album</Button>
    </div>
  </ToastContent>
</ToastContainer>
