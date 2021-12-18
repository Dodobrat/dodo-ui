import { useCallback, useState } from "react";
import { canUseDOM } from "../helpers";

type useLocalStorageType = (key: string, initialValue: any) => [value: any, setValue: setValueType, remove: removeItemType];
type setValueType = (value: any) => void;
type removeItemType = () => void;

const useLocalStorage: useLocalStorageType = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState<any>(() => {
		if (!canUseDOM) return;
		try {
			const item = localStorage.getItem(key);
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
			localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (err) {
			console.log(err);
		}
	};

	const remove: removeItemType = useCallback(() => {
		if (!canUseDOM) return;
		try {
			localStorage.removeItem(key);
		} catch (err) {
			console.log(err);
		}
	}, [key]);

	return [storedValue, setValue, remove];
};

export default useLocalStorage;
