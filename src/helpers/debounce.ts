type debounceType = (func: Function, wait?: number) => (...args: any[]) => void;

const debounce: debounceType = (func, wait = 500) => {
	let timeout: NodeJS.Timeout;

	return (...args) => {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
};

export default debounce;
