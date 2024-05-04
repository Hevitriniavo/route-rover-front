import { useCallback } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver ";

const Header = () => {
    const handleIntersection: IntersectionObserverCallback = useCallback(
        (entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle("fade-in", entry.isIntersecting);
                if (entry.isIntersecting) {
                    entry.target.classList.toggle("fade-in", entry.isIntersecting);
                }
            });
        }, []);

    useIntersectionObserver('.fade-out', handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
    });
    return (
        <div className="bg-cover bg-center h-screen flex flex-col justify-center  items-center" style={{ backgroundImage: 'url("bg-header.jpg")' }}>
            <h1 className="fade-out text-white text-3xl md:text-4xl lg:text-5xl text-center font-bold leading-tight">
                Voyageons avec nous, c'est bon d'être avec nous
            </h1>
        </div>
    );
};

export default Header;
