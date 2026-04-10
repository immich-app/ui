<script lang="ts">
  import { Link, NavbarItem } from '@immich/ui';
  import {
    mdiButtonCursor,
    mdiButtonPointer,
    mdiCloseCircleOutline,
    mdiHome,
    mdiHomeCircle,
    mdiHomeCircleOutline,
  } from '@mdi/js';
</script>

<div class="max-w-50">
  <NavbarItem icon={mdiHome} title="Alert" href="/components/alert" />
  <NavbarItem
    icon={mdiHome}
    title="Buttons"
    href="/components/button"
    items={[
      { title: 'Button', href: '/components/button', icon: mdiButtonCursor },
      { title: 'ListButton', href: '/components/list-button', icon: mdiButtonPointer },
      { title: 'IconButton', href: '/components/icon-button', icon: mdiHomeCircleOutline, activeIcon: mdiHomeCircle },
      { title: 'CloseButton', href: '/components/close-button', icon: mdiCloseCircleOutline },
    ]}
  />
  <NavbarItem icon={mdiHome} title="Card" href="/components/card" />
  <NavbarItem icon={mdiHome} title="Custom" href="#">
    {#snippet items()}
      <Link class="text-muted-foreground ps-8 text-sm" href="#">Custom content goes here</Link>
    {/snippet}
  </NavbarItem>
</div>
