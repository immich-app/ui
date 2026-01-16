<script lang="ts">
  import { NavbarGroup, NavbarItem } from '@immich/ui';
  import { mdiHome } from '@mdi/js';
</script>

<div class="w-50">
  <NavbarGroup title="Compact" variant="compact" />
  <NavbarItem title="Compact" href="#" variant="compact" active icon={mdiHome} />
  <NavbarItem title="Button" href="#" variant="compact" />
  <NavbarItem title="Card" href="#" variant="compact" />
</div>
