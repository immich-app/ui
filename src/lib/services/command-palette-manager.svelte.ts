import { goto } from '$app/navigation';

export type CommandItem = {
	icon: string;
	iconClass: string;
	type: string;
	title: string;
	description?: string;
	text: string;
} & ({ href: string; external?: boolean } | { action: () => void });

export const asText = (...items: unknown[]) => {
	return items
		.filter((item) => item !== undefined && item !== null)
		.map((items) => String(items))
		.join('|')
		.toLowerCase();
};

const isEqual = (a: CommandItem, b: CommandItem) => {
	return a.title === b.title && a.type === b.type;
};

const isMatch = (item: CommandItem, query: string): boolean => {
	if (!query) {
		return true;
	}

	return item.text.includes(query);
};

class CommandPaletteManager {
	isEnabled = $state(false);
	isOpen = $state(false);
	query = $state('');
	selectedIndex = $state(0);
	private normalizedQuery = $derived(this.query.toLowerCase());

	items: CommandItem[] = [];
	filteredItems = $derived(
		this.items.filter((item) => isMatch(item, this.normalizedQuery)).slice(0, 100),
	);
	recentItems = $state<CommandItem[]>([]);
	results = $derived(this.query ? this.filteredItems : this.recentItems);

	enable() {
		this.isEnabled = true;
	}

	async open() {
		if (!this.isEnabled || this.isOpen) {
			return;
		}

		this.selectedIndex = 0;
		this.isOpen = true;
	}

	close() {
		if (!this.isEnabled || !this.isOpen) {
			return;
		}

		this.query = '';
		this.isOpen = false;
	}

	async select(selectedIndex?: number) {
		const selected = this.results[selectedIndex ?? this.selectedIndex];
		if (!selected) {
			return;
		}

		// no duplicates
		this.recentItems = this.recentItems.filter((item) => !isEqual(item, selected));
		this.recentItems.unshift(selected);
		this.recentItems = this.recentItems.slice(0, 5);

		if ('href' in selected) {
			if (selected.href.startsWith('http') || selected.external) {
				window.open(selected.href, '_blank');
			} else {
				await goto(selected.href);
			}
		} else {
			await selected.action();
		}

		this.close();
	}

	remove(index: number) {
		this.recentItems.splice(index, 1);
	}

	up() {
		this.selectedIndex = (this.selectedIndex - 1 + this.results.length) % this.results.length;
	}

	down() {
		this.selectedIndex = (this.selectedIndex + 1) % this.results.length;
	}

	reset() {
		this.items = [];
		this.isOpen = false;
		this.query = '';
	}

	addCommands(itemOrItems: CommandItem | CommandItem[]) {
		const items = Array.isArray(itemOrItems) ? itemOrItems : [itemOrItems];
		this.items.push(...items);
	}

	removeCommands(itemOrItems: CommandItem | CommandItem[]) {
		const items = Array.isArray(itemOrItems) ? itemOrItems : [itemOrItems];
		for (const remoteItem of items) {
			this.items = this.items.filter((item) => !isEqual(item, remoteItem));
		}
	}
}

export const commandPaletteManager = new CommandPaletteManager();
