import { useCallback, useState } from "react";

type useToggleType = (initialValue?: boolean) => [value: boolean, toggleValue: () => void];

const useToggle: useToggleType = (initialValue = false) => {
	const [value, setValue] = useState(initialValue);

	const toggleValue = useCallback(() => setValue((prev) => !prev), []);

	return [value, toggleValue];
};

export default useToggle;
