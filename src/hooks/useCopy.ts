import { useState } from "react";

type clipboardStateType = {
	value: string | null;
	isCopied: boolean;
};

type copyType = (content: string | number | Object) => void;

type useCopyType = () => {
	copy: (content: string | number | Object) => void;
	value: string | null;
	isCopied: boolean;
};

const useCopy: useCopyType = () => {
	const [clipboardState, setClipboardState] = useState<clipboardStateType>({
		value: null,
		isCopied: false,
	});

	const copy: copyType = (content) => {
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
	};

	return { copy, ...clipboardState };
};

export default useCopy;
