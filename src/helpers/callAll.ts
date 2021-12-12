type callAllType = (...fns: Function[]) => (...args: any[]) => void;

const callAll: callAllType =
	(...fns) =>
	(...args) =>
		fns.forEach((fn) => typeof fn === "function" && fn(...args));

export default callAll;
