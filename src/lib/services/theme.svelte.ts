import { Theme } from '$lib/types.js';

export const theme = $state<{ value: Theme }>({ value: Theme.Dark });

export const syncToDom = () => {
	switch (theme.value) {
		case Theme.Dark: {
			document.body.classList.add('dark');
			break;
		}

		default: {
			document.body.classList.remove('dark');
		}
	}
};
