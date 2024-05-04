import { useEffect, useRef } from "react";

const useIntersectionObserver = (
    select: string,
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
) => {
    const isMounted = useRef(true);
    useEffect(() => {
        if (isMounted.current) {
            const observer = new IntersectionObserver(callback, options);
            const elements = document.querySelectorAll(select);
            elements.forEach((element) => {
                observer.observe(element);
            });
        }
        return () => {
            isMounted.current = false
        }
    }, [select, callback, options]);
};

export default useIntersectionObserver;
