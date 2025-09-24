<script lang="ts">
  import { CodeBlock, Stack, Text } from '@immich/ui';
  import { json } from 'svelte-highlight/languages';

  const typescriptExample1 = "const foo = 'bar';";
  const typescriptExample2 = typescriptExample1 + `\nconst hello = "world!"`;
  const jsonExample = JSON.stringify({ foo: 'bar', hello: 'world!' }, null, 2);
</script>

<Stack gap={4}>
  <div class="flex flex-col gap-2">
    <Text>TypeScript language</Text>
    <CodeBlock code={typescriptExample1} />
  </div>

  <div class="flex flex-col gap-2">
    <Text>JSON language</Text>
    <CodeBlock code={jsonExample} language={json} />
  </div>

  <div class="flex flex-col gap-2">
    <Text>No copy</Text>
    <CodeBlock code={typescriptExample2} copy={false} />
  </div>

  <div class="flex flex-col gap-2">
    <Text>Line numbers on</Text>
    <CodeBlock code={jsonExample} language={json} lineNumbers />
  </div>
</Stack>
