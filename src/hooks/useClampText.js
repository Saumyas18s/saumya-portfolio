import { useEffect, useRef } from "react";

export default function useClampText(lines = 3) {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.style.display = "-webkit-box";
      elementRef.current.style.webkitBoxOrient = "vertical";
      elementRef.current.style.webkitLineClamp = lines;
      elementRef.current.style.overflow = "hidden";
    }
  }, [lines]);

  return elementRef;
}
