<script lang="ts">
  import ComponentSizes from '$docs/components/ComponentSizes.svelte';
  import { Field, PasswordInput, Stack } from '@immich/ui';
</script>

<Stack>
  <ComponentSizes>
    {#snippet child({ size, label })}
      <div>
        <Field {label} {size}>
          <PasswordInput value="super-secret-password" placeholder={label} />
        </Field>
      </div>
    {/snippet}
  </ComponentSizes>
</Stack>
