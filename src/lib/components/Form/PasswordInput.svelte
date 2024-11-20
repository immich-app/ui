<script lang="ts">
	import { IconButton, Input, type PasswordInputProps } from '@immich/ui';
	import { mdiEyeOffOutline, mdiEyeOutline } from '@mdi/js';

	let {
		value = $bindable<string>(),
		showLabel = 'Show password',
		hideLabel = 'Hide password',
		isVisible = $bindable<boolean>(false),
		color = 'secondary',
		...props
	}: PasswordInputProps = $props();
</script>

<Input bind:value type={isVisible ? 'text' : 'password'} {color} {...props}>
	{#snippet trailingIcon()}
		{#if value?.length > 0}
			<IconButton
				variant="ghost"
				shape="round"
				color="secondary"
				class="m-1"
				icon={isVisible ? mdiEyeOffOutline : mdiEyeOutline}
				onclick={() => (isVisible = !isVisible)}
				title={isVisible ? hideLabel : showLabel}
			></IconButton>
		{/if}
	{/snippet}
</Input>
