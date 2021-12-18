import { useCallback, useState } from "react";

type useThrottleType = (cb: Function, delay?: number) => (...args: any[]) => void;
type throttledFuncType = (...args: any[]) => void;

const useThrottle: useThrottleType = (cb, delay = 500) => {
	const [lastTime, setLastTime] = useState<number>(0);

	const throttledFunc: throttledFuncType = useCallback(
		(...args) => {
			const now: number = Date.now();

			if (now - lastTime >= delay) {
				cb(...args);
				setLastTime(now);
			}
		},
		[cb, lastTime, delay]
	);

	return throttledFunc;
};

export default useThrottle;
