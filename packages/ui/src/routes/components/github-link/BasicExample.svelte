<script>
  import ComponentSizes from '$docs/components/ComponentSizes.svelte';
  import Stack from '$lib/components/Stack/Stack.svelte';
  import { GithubLink, Heading, Text } from '@immich/ui';
</script>

<Heading size="small">Default</Heading>
<GithubLink number={1000} />

<Heading size="small" class="mt-4">Another repo</Heading>
<GithubLink repo="static-pages" number={64} />

<Heading size="small" class="mt-4">Another org</Heading>
<GithubLink org="kysely-org" repo="kysely" number={64} />

<Heading size="small" class="mt-4">No icon</Heading>
<GithubLink number={64} icon={false} />

<Stack gap={4} class="mt-4">
  <ComponentSizes>
    {#snippet child({ size })}
      <Text {size}>
        For example, issue <GithubLink {size} number={1} /> is a link to github.
      </Text>
    {/snippet}
  </ComponentSizes>
</Stack>
