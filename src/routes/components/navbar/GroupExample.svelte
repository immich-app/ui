<script lang="ts">
	import NavbarGroup from '$lib/components/Navbar/NavbarGroup.svelte';
	import { NavbarItem } from '@immich/ui';
	import { mdiButtonPointer, mdiCardOutline, mdiHome } from '@mdi/js';
</script>

<div class="w-[200px]">
	<NavbarItem icon={mdiHome} title="Home" href="#" active />
	<NavbarGroup title="Components" />
	<NavbarItem icon={mdiButtonPointer} title="Button" href="#" />
	<NavbarItem icon={mdiCardOutline} title="Card" href="#" />
</div>
