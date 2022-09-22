import { useEffect, useState } from "react";

export const useIntersectedView = (ref, options) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
      //console.log(entry)
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // if (ref.current) {
      //   observer.unobserve(ref.current);
      // }
      observer.disconnect();
    };
  }, [ref, options]);

  return [isVisible];
}