import React, { forwardRef, useCallback, useRef } from "react";
import { mergeRefs } from "../helpers";
import { CnCh } from "../types";

type usePrintContentType = () => {
	print: () => void;
	PrintContainer: React.ForwardRefExoticComponent<Pick<PrintContainerProps, keyof PrintContainerProps> & React.RefAttributes<unknown>>;
};

interface PrintContainerProps extends CnCh {
	title: string;
	iframeProps?: React.IframeHTMLAttributes<HTMLIFrameElement>;
	[key: string]: any;
}

const usePrintContent: usePrintContentType = () => {
	const printContainerRef = useRef(null);
	const printContentRef = useRef(null);

	const print = useCallback(() => {
		const content: React.MutableRefObject<null> | null | any = printContainerRef.current;
		const printFrame: React.MutableRefObject<null> | null | any = printContentRef.current
			? printContentRef.current["contentWindow"]
			: null;

		if (printFrame) {
			printFrame.document.open();
			printFrame.document.write(content.innerHTML);
			printFrame.document.close();
			printFrame.focus();
			printFrame.print();
		}
	}, []);

	const PrintContainer = forwardRef<unknown, PrintContainerProps>(({ children, title, iframeProps, ...rest }, ref) => {
		return (
			<>
				<iframe
					title={title}
					style={{ width: 0, height: 0, position: "absolute", border: "none" }}
					{...iframeProps}
					ref={printContentRef}
				/>
				<div {...rest} ref={mergeRefs([printContainerRef, ref])}>
					{children}
				</div>
			</>
		);
	});

	return {
		print,
		PrintContainer,
	};
};

export default usePrintContent;
