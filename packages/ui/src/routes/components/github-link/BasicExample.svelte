<script>
  import { GithubLink, Heading } from '@immich/ui';
</script>

<Heading size="small">Default</Heading>
<GithubLink number={1000} />

<Heading size="small" class="mt-4">Another repo</Heading>
<GithubLink repo="static-pages" number={64} />

<Heading size="small" class="mt-4">Another org</Heading>
<GithubLink org="kysely-org" repo="kysely" number={64} />

<Heading size="small" class="mt-4">No icon</Heading>
<GithubLink number={64} icon={false} />
