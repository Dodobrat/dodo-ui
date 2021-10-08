import useMediaQuery from "./useMediaQuery";

type usePrefersDarkModeType = () => boolean;

const usePrefersDarkMode: usePrefersDarkModeType = () => useMediaQuery("(prefers-color-scheme: dark)");

export default usePrefersDarkMode;
