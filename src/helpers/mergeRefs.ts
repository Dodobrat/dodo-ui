type mergeRefsType = (refs: Array<React.MutableRefObject<any> | React.LegacyRef<any>>) => React.RefCallback<any>;

const mergeRefs: mergeRefsType = (refs) => {
	return (value) => {
		refs.forEach((ref) => {
			if (typeof ref === "function") {
				ref(value);
			} else if (ref != null) {
				(ref as React.MutableRefObject<any | null>).current = value;
			}
		});
	};
};

export default mergeRefs;
