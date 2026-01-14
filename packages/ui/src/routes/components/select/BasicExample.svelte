<script lang="ts">
  import { CodeBlock, Field, Select, Stack, Text, toastManager, type SelectOption } from '@immich/ui';
  import { json } from 'svelte-highlight/languages';

  const themes: SelectOption[] = [
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

  const empty = [{ label: '(empty)', value: '' }, ...frameworks];

  let value = $state(themes[0].value);

  let invalidItem = $state('angular');

  const onSelect = (item: SelectOption) => {
    toastManager.primary({ title: 'Theme change', description: `New value: ${item.label} (${item.value})` });
  };
</script>

<Stack class="mb-8 max-w-62.5" gap={8}>
  <Field label="Framework">
    <Select options={frameworks} />
  </Field>

  <Field label="Empty">
    <Select options={empty} value="" />
  </Field>

  <div class="w-1/2">
    <Field label="Framework">
      <Select options={frameworks} />
    </Field>
  </div>

  <Field label="Framework" invalid={invalidItem === 'angular'}>
    <Select options={frameworks} bind:value={invalidItem} />
  </Field>

  <Field label="Label">
    <Select options={frameworks} placeholder="Select a framework" />
  </Field>

  <Field label="Required" required="indicator">
    <Select options={frameworks} />
  </Field>

  <Field label="Disabled option">
    <Select options={[{ value: 'Svelte' }, { value: 'React' }, { value: 'Angular', disabled: true }]} />
  </Field>

  <Field label="Disabled select" disabled>
    <Select options={[{ value: 'Svelte' }, { value: 'React' }, { value: 'Angular', disabled: true }]} />
  </Field>

  <Field label="Long list">
    <Select bind:value options={themes} {onSelect} />
  </Field>
</Stack>

<div class="w-full">
  <Text>Theme:</Text>
  <CodeBlock language={json} code={JSON.stringify(value, null, 2)} />
</div>
