<script lang="ts">
  import {
    Avatar,
    BasicModal,
    Button,
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    HStack,
    ListButton,
    Stack,
    Text,
  } from '@immich/ui';
  import { SvelteSet } from 'svelte/reactivity';

  const ids = new SvelteSet<number>([2, 4, 6]);
  let open = $state(false);

  const onclick = (id: number) => {
    return () => {
      if (ids.has(id)) {
        ids.delete(id);
      } else {
        ids.add(id);
      }
    };
  };
</script>

<Stack>
  <Card color="secondary" class="max-w-75">
    <CardHeader><CardTitle>Semi-round</CardTitle></CardHeader>
    <CardBody class="flex flex-col gap-2">
      <ListButton shape="semi-round" selected={ids.has(1)} onclick={onclick(1)}>Hello World!</ListButton>
      <ListButton shape="semi-round" selected={ids.has(2)} onclick={onclick(2)}>Hello World!</ListButton>
    </CardBody>
  </Card>

  <Card color="secondary" class="max-w-75">
    <CardHeader><CardTitle>Round</CardTitle></CardHeader>
    <CardBody class="flex flex-col gap-2">
      <ListButton shape="round" selected={ids.has(3)} onclick={onclick(3)}>Hello World!</ListButton>
      <ListButton shape="round" selected={ids.has(4)} onclick={onclick(4)}>Hello World!</ListButton>
    </CardBody>
  </Card>

  <Card color="secondary" class="max-w-75">
    <CardHeader><CardTitle>Rectangle</CardTitle></CardHeader>
    <div class="mt-4">
      <ListButton shape="rectangle" selected={ids.has(5)} onclick={onclick(5)}>Hello World!</ListButton>
      <ListButton shape="rectangle" selected={ids.has(6)} onclick={onclick(6)}>Hello World!</ListButton>
    </div>
  </Card>

  <div>
    <Button onclick={() => (open = true)}>Open Modal</Button>
  </div>
</Stack>

{#if open}
  <BasicModal title="Example" onClose={() => (open = false)}>
    <HStack wrap>
      <ListButton selected={ids.has(10)} onclick={onclick(10)}>
        <div class="flex items-center gap-2">
          <Avatar name="Test User" size="medium" />
          <div>
            <Text size="small">Test User</Text>
            <Text size="tiny">placeholder</Text>
          </div>
        </div>
      </ListButton>
      <ListButton selected={ids.has(11)} onclick={onclick(11)}>
        <div class="flex items-center gap-2">
          <Avatar name="Test User" size="medium" />
          <div>
            <Text size="small">Test User</Text>
            <Text size="tiny">placeholder</Text>
          </div>
        </div>
      </ListButton>
    </HStack>
  </BasicModal>
{/if}
