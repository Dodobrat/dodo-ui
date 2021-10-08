import { useCallback, useEffect, useMemo } from "react";
import { canUseDOM } from "../helpers";

interface useEventListenerConfigProps {
	el?: (Window & typeof globalThis) | HTMLElement | any;
	eventOptions?: any;
}
type useEventListenerType = (e: string, handler: (e: Event) => void, config?: useEventListenerConfigProps) => void;

const useEventListener: useEventListenerType = (e, handler, config) => {
	const el = useMemo(() => config?.el ?? window, [config?.el]);
	const eventOptions = config?.eventOptions ?? {};

	const callback = useCallback((e: Event) => handler?.(e), [handler]);

	useEffect(() => {
		if (!canUseDOM) return;

		if (el) {
			el.addEventListener(e, callback, eventOptions);
			return () => el.removeEventListener(e, callback, eventOptions);
		}
	}, [e, config]);
};

export default useEventListener;
