<script lang="ts">
  import { HStack, Text, Heading } from '@immich/ui';

  const colorGroups = [
    {
      name: 'Primary',
      colors: [
        { name: 'primary', class: 'bg-primary' },
        { name: 'primary-50', class: 'bg-primary-50' },
        { name: 'primary-100', class: 'bg-primary-100' },
        { name: 'primary-200', class: 'bg-primary-200' },
        { name: 'primary-300', class: 'bg-primary-300' },
        { name: 'primary-400', class: 'bg-primary-400' },
        { name: 'primary-500', class: 'bg-primary-500' },
        { name: 'primary-600', class: 'bg-primary-600' },
        { name: 'primary-700', class: 'bg-primary-700' },
        { name: 'primary-800', class: 'bg-primary-800' },
        { name: 'primary-900', class: 'bg-primary-900' },
      ],
    },
    {
      name: 'Success',
      colors: [
        { name: 'success', class: 'bg-success' },
        { name: 'success-50', class: 'bg-success-50' },
        { name: 'success-100', class: 'bg-success-100' },
        { name: 'success-200', class: 'bg-success-200' },
        { name: 'success-300', class: 'bg-success-300' },
        { name: 'success-400', class: 'bg-success-400' },
        { name: 'success-500', class: 'bg-success-500' },
        { name: 'success-600', class: 'bg-success-600' },
        { name: 'success-700', class: 'bg-success-700' },
        { name: 'success-800', class: 'bg-success-800' },
        { name: 'success-900', class: 'bg-success-900' },
      ],
    },
    {
      name: 'Danger',
      colors: [
        { name: 'danger', class: 'bg-danger' },
        { name: 'danger-50', class: 'bg-danger-50' },
        { name: 'danger-100', class: 'bg-danger-100' },
        { name: 'danger-200', class: 'bg-danger-200' },
        { name: 'danger-300', class: 'bg-danger-300' },
        { name: 'danger-400', class: 'bg-danger-400' },
        { name: 'danger-500', class: 'bg-danger-500' },
        { name: 'danger-600', class: 'bg-danger-600' },
        { name: 'danger-700', class: 'bg-danger-700' },
        { name: 'danger-800', class: 'bg-danger-800' },
        { name: 'danger-900', class: 'bg-danger-900' },
      ],
    },
    {
      name: 'Warning',
      colors: [
        { name: 'warning', class: 'bg-warning' },
        { name: 'warning-50', class: 'bg-warning-50' },
        { name: 'warning-100', class: 'bg-warning-100' },
        { name: 'warning-200', class: 'bg-warning-200' },
        { name: 'warning-300', class: 'bg-warning-300' },
        { name: 'warning-400', class: 'bg-warning-400' },
        { name: 'warning-500', class: 'bg-warning-500' },
        { name: 'warning-600', class: 'bg-warning-600' },
        { name: 'warning-700', class: 'bg-warning-700' },
        { name: 'warning-800', class: 'bg-warning-800' },
        { name: 'warning-900', class: 'bg-warning-900' },
      ],
    },
    {
      name: 'Info',
      colors: [
        { name: 'info', class: 'bg-info' },
        { name: 'info-50', class: 'bg-info-50' },
        { name: 'info-100', class: 'bg-info-100' },
        { name: 'info-200', class: 'bg-info-200' },
        { name: 'info-300', class: 'bg-info-300' },
        { name: 'info-400', class: 'bg-info-400' },
        { name: 'info-500', class: 'bg-info-500' },
        { name: 'info-600', class: 'bg-info-600' },
        { name: 'info-700', class: 'bg-info-700' },
        { name: 'info-800', class: 'bg-info-800' },
        { name: 'info-900', class: 'bg-info-900' },
      ],
    },

    {
      name: 'Neutral Colors',
      colors: [
        { name: 'light', class: 'bg-light' },
        { name: 'dark', class: 'bg-dark' },
        { name: 'muted', class: 'bg-muted' },
        { name: 'subtle', class: 'bg-subtle' },
      ],
    },
  ];
</script>

<div class="grid grid-cols-1 md:grid-cols-2">
  {#each colorGroups as group (group.name)}
    <div class="mb-10">
      <Heading class="mb-2">{group.name}</Heading>
      <div class="grid grid-cols-1 gap-2">
        {#each group.colors as color (color.name)}
          <HStack gap={2} class="items-center">
            <div class="h-12 w-20 rounded-lg {color.class} shrink-0 border border-gray-300 dark:border-gray-600"></div>
            <div class="grid grid-cols-1 grid-rows-2">
              <Text class="font-semibold">{color.name}</Text>
              <Text class="text-muted text-xs">{color.class}</Text>
            </div>
          </HStack>
        {/each}
      </div>
    </div>
  {/each}
</div>
