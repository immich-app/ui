<script lang="ts">
	import { withChildrenSnippets } from '$lib/common/use-child.svelte.js';
	import Card from '$lib/components/Card/Card.svelte';
	import CardBody from '$lib/components/Card/CardBody.svelte';
	import CardFooter from '$lib/components/Card/CardFooter.svelte';
	import CardHeader from '$lib/components/Card/CardHeader.svelte';
	import CardTitle from '$lib/components/Card/CardTitle.svelte';
	import CloseButton from '$lib/components/CloseButton/CloseButton.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import Logo from '$lib/components/Logo/Logo.svelte';
	import { ChildKey } from '$lib/constants.js';
	import type { ModalSize } from '$lib/types.js';
	import { cleanClass } from '$lib/utils.js';
	import { Dialog } from 'bits-ui';
	import { type Snippet } from 'svelte';
	import { tv } from 'tailwind-variants';

	type Props = {
		title: string;
		size?: ModalSize;
		class?: string;
		open?: boolean;
		icon?: string | boolean;
		expandable?: boolean;
		children: Snippet;
		onClose?: () => void;
	};

	let {
		title,
		size = 'medium',
		open = true,
		icon = true,
		onClose,
		class: className,
		children,
	}: Props = $props();

	const modalStyles = tv({
		base: 'flex rounded-none border border-subtle bg-subtle sm:rounded-2xl',
		variants: {
			size: {
				tiny: 'h-full sm:h-min md:max-w-sm',
				small: 'h-full sm:h-min md:max-w-md',
				medium: 'h-full sm:h-min md:max-w-screen-sm',
				large: 'h-full sm:h-min md:max-w-screen-md',
				giant: 'h-full sm:h-min md:max-w-screen-lg',
				full: 'h-full w-full',
			},
		},
	});

	const { getChildren: getChildSnippet } = withChildrenSnippets(ChildKey.Modal);
	const bodyChildren = $derived(getChildSnippet(ChildKey.ModalBody));
	const footerChildren = $derived(getChildSnippet(ChildKey.ModalFooter));

	const onChange = (value: boolean) => {
		if (!value) {
			onClose?.();
		}
	};
</script>

<Dialog.Root {open} onOpenChange={onChange}>
	<Dialog.Portal>
		<Dialog.Overlay class="absolute start-0 top-0 flex h-dvh w-screen backdrop-blur" />
		<Dialog.Content
			class={cleanClass(
				'absolute start-0 top-0 flex h-dvh w-screen items-center justify-center overflow-hidden sm:p-4',
			)}
		>
			<div class={cleanClass('flex h-full w-full flex-col items-center justify-center ')}>
				<Card class={cleanClass(modalStyles({ size }), className)}>
					<CardHeader class="border-b border-gray-400 py-2 dark:border-gray-500">
						<div class="flex items-center justify-between gap-2">
							{#if typeof icon === 'string'}
								<Icon {icon} size="1.5rem" aria-hidden />
							{:else if icon}
								<Logo variant="icon" size="tiny" />
							{/if}
							<CardTitle tag="h1" class="grow">{title}</CardTitle>
							<Dialog.Close>
								<CloseButton onclick={() => onChange(false)} class="-me-2" />
							</Dialog.Close>
						</div>
					</CardHeader>

					<CardBody class="grow">
						{@render bodyChildren?.snippet()}
					</CardBody>

					{#if footerChildren}
						<CardFooter class="border-t border-gray-400 dark:border-gray-500">
							{@render footerChildren.snippet()}
						</CardFooter>
					{/if}
				</Card>
			</div>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
{@render children?.()}
