// useScrollAnimation.ts
import { useEffect, useRef, RefObject } from "react";

type ElementsRef = RefObject<HTMLDivElement[]>;

const useScrollAnimation = (): ElementsRef => {
  const elementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-appear");
          }
        });
      },
      { threshold: 0.1 },
    );

    const currentElements = elementsRef.current;
    if (currentElements) {
      currentElements.forEach((element) => {
        if (element) observer.observe(element);
      });
    }

    return () => {
      if (currentElements) {
        currentElements.forEach((element) => {
          if (element) observer.unobserve(element);
        });
      }
    };
  }, []);

  return elementsRef;
};

export default useScrollAnimation;
