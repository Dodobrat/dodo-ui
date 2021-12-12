import { useCallback, useEffect, useState } from "react";

type clipboardStateType = {
	value: string | null;
	isCopied: boolean;
};

type copyType = (content: string | number | Object) => void;

type useCopyType = (feedbackDelay?: number) => (copyType | clipboardStateType)[];

const useCopy: useCopyType = (feedbackDelay = 2000) => {
	const [clipboardState, setClipboardState] = useState<clipboardStateType>({
		value: null,
		isCopied: false,
	});

	const copy: copyType = useCallback((content) => {
		if (Boolean(navigator?.clipboard?.writeText)) {
			const stringifiedContent = typeof content === "object" ? JSON.stringify(content) : content.toString();

			navigator.clipboard.writeText(stringifiedContent).then(() =>
				setClipboardState({
					value: stringifiedContent,
					isCopied: true,
				})
			);
		} else {
			setClipboardState({
				value: null,
				isCopied: false,
			});
		}
	}, []);

	useEffect(() => {
		if (!clipboardState.isCopied) return;

		const handler = setTimeout(() => setClipboardState((prev) => ({ ...prev, isCopied: false })), feedbackDelay);
		return () => clearTimeout(handler);
	}, [clipboardState.isCopied, feedbackDelay]);

	return [copy, clipboardState];
};

export default useCopy;
