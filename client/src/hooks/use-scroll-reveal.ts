import { useEffect, useRef, RefObject } from 'react';

export function useScrollReveal<T extends HTMLElement = HTMLElement>(): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const inView = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          inView.current = true;
          if (ref.current) {
            ref.current.classList.add('visible');
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, inView.current];
}