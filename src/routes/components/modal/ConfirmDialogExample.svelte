<script lang="ts">
	import { Button, modalManager } from '@immich/ui';

	const handleConfirm = async () => {
		const confirmed = await modalManager.showDialog({
			title: 'Nice title',
			prompt: 'Are you sure you want to delete this?',
			confirmText: 'Yes, I am',
			confirmColor: 'success',
		});

		if (confirmed) {
			// TODO replace this with a sonner/notification like thing
			alert('Deleted');
		}
	};
</script>

<Button onclick={handleConfirm}>Delete</Button>
