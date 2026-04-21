import { useEffect, useRef } from "react";

/**
 * Attach to a container ref. Every `.reveal` child inside it
 * gets `.in-view` added when the element enters the viewport.
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>(".reveal");
    if (!els || els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
