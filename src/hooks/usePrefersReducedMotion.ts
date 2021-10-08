import useMediaQuery from "./useMediaQuery";

type usePrefersReducedMotionType = () => boolean;

const usePrefersReducedMotion: usePrefersReducedMotionType = () => useMediaQuery("(prefers-reduced-motion)");

export default usePrefersReducedMotion;
