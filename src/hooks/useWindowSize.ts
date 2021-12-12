import { useState } from "react";

import { canUseDOM } from "../helpers";
import useEventListener from "./useEventListener";

interface useWindowSizeOutput {
	width: number;
	height: number;
}

type useWindowSizeType = () => useWindowSizeOutput;

const useWindowSize: useWindowSizeType = () => {
	const [windowSize, setWindowSize] = useState(() => {
		if (!canUseDOM) {
			return {
				width: 0,
				height: 0,
			};
		}

		return {
			width: window.innerWidth,
			height: window.innerHeight,
		};
	});

	useEventListener("resize", () => setWindowSize({ width: window.innerWidth, height: window.innerHeight }));

	return windowSize;
};

export default useWindowSize;
