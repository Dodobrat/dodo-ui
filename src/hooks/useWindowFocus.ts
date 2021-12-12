import { useState } from "react";

import useSmartEffect from "./useSmartEffect";

const hasFocus: () => boolean = () => typeof document !== "undefined" && document.hasFocus();

const useWindowFocus: () => boolean = () => {
	const [focused, setFocused] = useState(() => hasFocus());

	useSmartEffect(() => {
		const onFocus = () => setFocused(true);
		const onBlur = () => setFocused(false);

		window.addEventListener("focus", onFocus);
		window.addEventListener("blur", onBlur);

		return () => {
			window.removeEventListener("focus", onFocus);
			window.removeEventListener("blur", onBlur);
		};
	}, []);

	return focused;
};

export default useWindowFocus;
