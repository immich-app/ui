<script>
  import ComponentColors from '$docs/components/ComponentColors.svelte';
  import { Table, TableBody, TableCell, TableHeader, TableHeading, TableRow } from '@immich/ui';
</script>

<Table>
  <TableHeader>
    <TableHeading>Name</TableHeading>
    <TableHeading>Nickname</TableHeading>
    <TableHeading>Level</TableHeading>
  </TableHeader>
  <TableBody>
    <ComponentColors>
      {#snippet child({ color, label })}
        <TableRow>
          <TableCell>Placeholder</TableCell>
          <TableCell>Placeholder</TableCell>
          <TableCell>Placeholder</TableCell>
        </TableRow>
        <TableRow {color}>
          <TableCell>{label}</TableCell>
          <TableCell>{label}</TableCell>
          <TableCell>{label}</TableCell>
        </TableRow>
      {/snippet}
    </ComponentColors>
  </TableBody>
</Table>
