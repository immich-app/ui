<script lang="ts">
  import { Breadcrumbs, Stack, Text, type BreadcrumbItem } from '@immich/ui';
  import { mdiArrowRight, mdiCheckCircleOutline, mdiHomeOutline, mdiListBoxOutline, mdiSlashForward } from '@mdi/js';

  const items: BreadcrumbItem[] = [{ title: 'Home', href: '/' }, { title: 'Components' }, { title: 'Breadcrumbs' }];

  const backslash = { text: '\\' };
</script>

<Stack gap={4}>
  <div>
    <Text fontWeight="bold" class="mb-1">Basic</Text>
    <Breadcrumbs {items} />
  </div>

  <div>
    <Text fontWeight="bold" class="mb-1">Custom separator</Text>
    <Breadcrumbs {items} separator={mdiSlashForward} />
    <Breadcrumbs {items} separator={backslash} />
    <Breadcrumbs {items} separator={mdiArrowRight} />
  </div>

  <div>
    <Text fontWeight="bold" class="mb-1">Icons</Text>
    <Breadcrumbs
      items={[
        { icon: mdiHomeOutline, title: 'Home', href: '/' },
        { icon: mdiListBoxOutline, title: 'Components' },
        { icon: mdiCheckCircleOutline, title: 'Breadcrumbs' },
      ]}
    />
  </div>

  <div>
    <Text fontWeight="bold" class="mb-1">Icon only</Text>
    <Breadcrumbs items={[{ icon: mdiHomeOutline, href: '/' }, { title: 'Components' }, { title: 'Breadcrumbs' }]} />
  </div>
</Stack>
