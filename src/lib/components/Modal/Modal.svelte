<script lang="ts">
	import { withChildrenSnippets } from '$lib/common/use-child.svelte.js';
	import Card from '$lib/components/Card/Card.svelte';
	import CardBody from '$lib/components/Card/CardBody.svelte';
	import CardFooter from '$lib/components/Card/CardFooter.svelte';
	import CardHeader from '$lib/components/Card/CardHeader.svelte';
	import CardTitle from '$lib/components/Card/CardTitle.svelte';
	import CloseButton from '$lib/components/CloseButton/CloseButton.svelte';
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
		expandable?: boolean;
		children: Snippet;
		onClose?: () => void;
	};

	let {
		title,
		size = 'medium',
		open = true,
		onClose,
		class: className,
		children,
	}: Props = $props();

	const modalStyles = tv({
		base: 'flex rounded-none border border-subtle bg-subtle sm:rounded-2xl',
		variants: {
			size: {
				tiny: 'h-full sm:h-min md:max-w-64',
				small: 'h-full sm:h-min md:max-w-96',
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
		<Dialog.Overlay class="absolute left-0 top-0 flex h-dvh w-screen backdrop-blur" />
		<Dialog.Content
			class={cleanClass(
				'absolute left-0 top-0 flex h-dvh w-screen items-center justify-center overflow-hidden sm:p-4',
			)}
		>
			<div class={cleanClass('flex h-full w-full flex-col items-center justify-center ')}>
				<Card class={cleanClass(modalStyles({ size }), className)}>
					<CardHeader class="border-0 py-2">
						<div class="flex items-center justify-between">
							<CardTitle tag="h1">{title}</CardTitle>
							<Dialog.Close>
								<CloseButton size="large" onclick={() => onChange(false)} />
							</Dialog.Close>
						</div>
					</CardHeader>

					<CardBody class="grow py-2">
						{@render bodyChildren?.snippet()}
					</CardBody>

					{#if footerChildren}
						<CardFooter class="py-2">
							{@render footerChildren.snippet()}
						</CardFooter>
					{/if}
				</Card>
			</div>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
{@render children?.()}
