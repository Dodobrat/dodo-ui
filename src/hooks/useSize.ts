import { useEffect, useRef, useState } from "react";

type useSizeType = () => {
	ref: React.MutableRefObject<unknown>;
	size: DOMRectReadOnly | undefined;
};

const useSize: useSizeType = () => {
	const ref = useRef(null);
	const [size, setSize] = useState<DOMRectReadOnly>();

	useEffect(() => {
		if (ref.current === null) return;

		const observer = new ResizeObserver(([entry]) => setSize(entry.contentRect));
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return { ref, size };
};

export default useSize;
