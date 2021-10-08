import { useEffect, useLayoutEffect } from "react";

const useSmartEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default useSmartEffect;
