import { useCallback } from "react";
import useEventListener from "./useEventListener";

interface useOnClickOutsideConfigProps {
	dir?: "down" | "up";
}

type useOnClickOutsideType = (
	ref: React.RefObject<HTMLElement>,
	handler: (e: Event) => void,
	config?: useOnClickOutsideConfigProps
) => void;

const useOnClickOutside: useOnClickOutsideType = (ref, handler, config) => {
	const eventDirection = config?.dir ?? "up";

	const callback = useCallback(
		(e) => {
			if (!ref.current || ref.current.contains(e.target)) {
				return;
			}

			return handler?.(e);
		},
		[handler]
	);

	useEventListener(`pointer${eventDirection}`, callback);
};

export default useOnClickOutside;
