<script lang="ts">
  import { CodeBlock, Field, MultiSelect, Stack, Text, toastManager, type SelectItem } from '@immich/ui';
  import { json } from 'svelte-highlight/languages';

  const themes: SelectItem[] = [
    { value: 'light-monochrome', label: 'Light Monochrome' },
    { value: 'dark-green', label: 'Dark Green' },
    { value: 'svelte-orange', label: 'Svelte Orange' },
    { value: 'punk-pink', label: 'Punk Pink' },
    { value: 'ocean-blue', label: 'Ocean Blue', disabled: true },
    { value: 'sunset-red', label: 'Sunset Red' },
    { value: 'forest-green', label: 'Forest Green' },
    { value: 'lavender-purple', label: 'Lavender Purple', disabled: true },
    { value: 'mustard-yellow', label: 'Mustard Yellow' },
    { value: 'slate-gray', label: 'Slate Gray' },
    { value: 'neon-green', label: 'Neon Green' },
    { value: 'coral-reef', label: 'Coral Reef' },
    { value: 'midnight-blue', label: 'Midnight Blue' },
    { value: 'crimson-red', label: 'Crimson Red' },
    { value: 'mint-green', label: 'Mint Green' },
    { value: 'pastel-pink', label: 'Pastel Pink' },
    { value: 'golden-yellow', label: 'Golden Yellow' },
    { value: 'deep-purple', label: 'Deep Purple' },
    { value: 'turquoise-blue', label: 'Turquoise Blue' },
    { value: 'burnt-orange', label: 'Burnt Orange' },
  ];

  const frameworks = [
    { label: 'Angular', value: 'angular' },
    { label: 'React', value: 'react' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Vue', value: 'vue' },
  ];

  let values = $state([themes[0].value, themes[1].value]);

  const onItemChange = (items: SelectItem[]) => {
    toastManager.primary({
      title: `Theme change`,
      description: `New value: ${items.map((item) => `${item.label}`).join(', ')}`,
    });
  };
</script>

<Stack class="mb-8 max-w-[250px]" gap={8}>
  <Field label="Framework">
    <MultiSelect data={frameworks} />
  </Field>

  <Field label="Disabled option">
    <MultiSelect data={[{ value: 'Svelte' }, { value: 'React' }, { value: 'Angular', disabled: true }]} />
  </Field>

  <Field label="Long list">
    <MultiSelect bind:values data={themes} {onItemChange} />
  </Field>
</Stack>
<div class="w-full">
  <Text>Theme:</Text>
  <CodeBlock language={json} code={JSON.stringify(values, null, 2)} />
</div>
