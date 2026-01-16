<script lang="ts">
  import ComponentColors from '$docs/components/ComponentColors.svelte';
  import ComponentSizes from '$docs/components/ComponentSizes.svelte';
  import { Heading, NavbarGroup, NavbarItem } from '@immich/ui';
  import { mdiButtonPointer, mdiCardOutline, mdiHome } from '@mdi/js';
</script>

<div class="w-50">
  <NavbarItem icon={mdiHome} title="Home" href="#" active />
  <NavbarGroup title="Components" />
  <NavbarItem icon={mdiButtonPointer} title="Button" href="#" />
  <NavbarItem icon={mdiCardOutline} title="Card" href="#" />
  <div class="mt-8">
    <Heading size="tiny">Colors</Heading>
    <ComponentColors>
      {#snippet child({ label, color })}
        <NavbarGroup title={label} {color} />
      {/snippet}
    </ComponentColors>
  </div>
  <div class="mt-8">
    <Heading size="tiny">Sizes</Heading>
    <ComponentSizes>
      {#snippet child({ label, size })}
        <NavbarGroup title={label} {size} />
      {/snippet}
    </ComponentSizes>
  </div>
</div>
