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
