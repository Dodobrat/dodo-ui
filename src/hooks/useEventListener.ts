import { useCallback, useMemo } from "react";

import useSmartEffect from "./useSmartEffect";

interface useEventListenerConfigProps {
	el?: (Window & typeof globalThis) | HTMLElement | any;
	eventOptions?: any;
}
type useEventListenerType = (e: string, handler: (e: Event) => void, config?: useEventListenerConfigProps) => void;

const useEventListener: useEventListenerType = (e, handler, config) => {
	const el = useMemo(() => config?.el ?? window, [config?.el]);
	const eventOptions = config?.eventOptions ?? {};

	const callback = useCallback((e: Event) => handler?.(e), [handler]);

	useSmartEffect(() => {
		if (el) {
			el.addEventListener(e, callback, eventOptions);
			return () => el.removeEventListener(e, callback, eventOptions);
		}
	}, [e, config]);
};

export default useEventListener;
