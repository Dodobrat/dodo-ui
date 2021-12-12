import { useState } from "react";

import useSmartEffect from "./useSmartEffect";
import useEventListener from "./useEventListener";

type useMediaQueryType = (mediaQuery: string) => boolean;

const useMediaQuery: useMediaQueryType = (mediaQuery) => {
	const [isMatch, setIsMatch] = useState<boolean>(false);
	const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList>();

	useSmartEffect(() => {
		const list = window.matchMedia(mediaQuery);
		setMediaQueryList(list);
		setIsMatch(list.matches);
	}, [mediaQuery]);

	useEventListener("change", (e: any) => setIsMatch(e.matches), { el: mediaQueryList });

	return isMatch;
};

export default useMediaQuery;
