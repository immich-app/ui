<script lang="ts">
	import Input from '$lib/components/Form/Input.svelte';
	import IconButton from '$lib/components/IconButton/IconButton.svelte';
	import { t } from '$lib/services/translation.svelte.js';
	import type { PasswordInputProps } from '$lib/types.js';
	import { mdiEyeOffOutline, mdiEyeOutline } from '@mdi/js';

	let {
		value = $bindable<string>(),
		translations,
		isVisible = $bindable<boolean>(false),
		color = 'secondary',
		size,
		...props
	}: PasswordInputProps = $props();
</script>

<Input bind:value {size} type={isVisible ? 'text' : 'password'} {color} {...props}>
	{#snippet trailingIcon()}
		{#if value?.length > 0}
			<IconButton
				variant="ghost"
				shape="round"
				color="secondary"
				{size}
				class="me-1"
				icon={isVisible ? mdiEyeOffOutline : mdiEyeOutline}
				onclick={() => (isVisible = !isVisible)}
				title={isVisible ? t('hidePassword', translations) : t('showPassword', translations)}
				aria-label={t('showPassword', translations)}
			/>
		{/if}
	{/snippet}
</Input>
