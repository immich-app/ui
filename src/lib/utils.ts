export const cleanClass = (...classNames: unknown[]) => {
	return classNames
		.filter((className) => {
			if (!className || typeof className === 'boolean') {
				return false;
			}

			return typeof className === 'string';
		})
		.join(' ');
};

export const withPrefix = (key: string) => `immich-ui-${key}`;

let _count = 0;
export const generateId = (): string => `ui-id-${_count++}`;
