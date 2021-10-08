import { useCallback, useEffect } from "react";
import { canUseDOM } from "../helpers";

interface useOnKeyPressConfigProps {
	dir?: "down" | "up";
	eventOptions?: any;
}
type useOnKeyPressType = (key: string, handler: (e: Event) => void, config?: useOnKeyPressConfigProps) => void;

const useOnKeyPress: useOnKeyPressType = (key, handler, config) => {
	const eventDirection = config?.dir ?? "up";
	const eventOptions = config?.eventOptions ?? {};

	const callback = useCallback(
		(e: KeyboardEvent) => {
			if (typeof key === "string" && e.key === key) {
				return handler?.(e);
			}
		},
		[handler]
	);

	useEffect(() => {
		if (!canUseDOM) return;

		window.addEventListener(`key${eventDirection}`, callback, eventOptions);
		return () => window.removeEventListener(`key${eventDirection}`, callback, eventOptions);
	}, [key]);
};

export default useOnKeyPress;
