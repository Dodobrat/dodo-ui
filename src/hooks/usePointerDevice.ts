import useMediaQuery from "./useMediaQuery";

type usePointerType = () => boolean;
export const useIsTouchDevice: usePointerType = () => useMediaQuery("(pointer: coarse)");
export const useIsDesktopDevice: usePointerType = () => useMediaQuery("(pointer: fine)");

type usePointerDeviceType = () => {
	coarse: boolean;
	fine: boolean;
};

const usePointerDevice: usePointerDeviceType = () => {
	return {
		coarse: useIsTouchDevice(),
		fine: useIsDesktopDevice(),
	};
};

export default usePointerDevice;
