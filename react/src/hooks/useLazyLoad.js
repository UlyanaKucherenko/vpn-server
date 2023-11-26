import { useEffect, useRef } from 'react';

export const useLazyLoad = (
  parentRef,
  childRef,
  load,
  cb = () => console.log('bottom')
) => {
  const observer = useRef(null);

  useEffect(() => {
    if (parentRef.current && childRef.current) {
      observer.current = new IntersectionObserver(
        ([target]) => {
          if (target.isIntersecting) {
            if (!load) cb();
          }
        },
        { root: parentRef.current, rootMargin: '0px', threshold: 0 }
      );

      observer.current.observe(childRef.current);
    }

    return () => {
      if (childRef.current) observer.current.unobserve(childRef.current);
    };
  }, [load, cb]);
};
