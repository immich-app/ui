<script>
  import { Table, TableBody, TableCell, TableHeader, TableHeading, TableRow } from '@immich/ui';

  const team = [
    { name: 'Alice', nickname: 'The hacker', level: 'Senior' },
    { name: 'Bob', nickname: 'The builder', level: 'Junior' },
    { name: 'John', nickname: 'The thinker', level: 'Novice' },
  ];
</script>

<Table striped>
  <TableHeader>
    <TableHeading>Name</TableHeading>
    <TableHeading>Nickname</TableHeading>
    <TableHeading>Level</TableHeading>
  </TableHeader>
  <TableBody>
    {#each team as member (member.name)}
      <TableRow>
        <TableCell>{member.name}</TableCell>
        <TableCell>{member.nickname}</TableCell>
        <TableCell>{member.level}</TableCell>
      </TableRow>
    {/each}
  </TableBody>
</Table>
