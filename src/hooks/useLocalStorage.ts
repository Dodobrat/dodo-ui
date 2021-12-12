import { useState } from "react";
import { canUseDOM } from "../helpers";

type useLocalStorageType = (key: string, initialValue: any) => [value: any, setValue: setValueType];
type setValueType = (value: any) => void;

const useLocalStorage: useLocalStorageType = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState<any>(() => {
		if (!canUseDOM) return;
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (err) {
			console.log(err);
			return initialValue;
		}
	});

	const setValue: setValueType = (value) => {
		if (!canUseDOM) return;
		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (err) {
			console.log(err);
		}
	};

	return [storedValue, setValue];
};

export default useLocalStorage;
