import { useState, useEffect } from "react";

type useDebounceType = (value: any, delay?: number) => any;

const useDebounce: useDebounceType = (value, delay = 500) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => clearTimeout(handler);
	}, [value, delay]);

	return debouncedValue;
};

export default useDebounce;
