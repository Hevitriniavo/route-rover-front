import { useCallback } from "react";
import { NavLink } from "react-router-dom"
import useIntersectionObserver from "../hooks/useIntersectionObserver ";

const Navigation = () => {
    const handleIntersection: IntersectionObserverCallback = useCallback(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in")
                }
            });
        }, []);

    useIntersectionObserver('.fade-out', handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
    });
    const hasImage = true;
    return (
        <nav className="fixed w-full bg-transparent py-1">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white">
                    <NavLink to="/" className=" fade-out text-xl font-bold">
                        <span className="text-yellow-500">Trans</span>
                        <span className="text-green-500">Ambala</span>
                    </NavLink>
                </div>
                <div className="flex items-center">
                    <div className="space-x-4">
                        <NavLink to="/" className="text-white fade-out hover:text-gray-300">Accueil</NavLink>
                        <NavLink to="/" className="text-white fade-out hover:text-gray-300">Réservation</NavLink>
                        <NavLink to="/" className="text-white fade-out hover:text-gray-300">À propos</NavLink>
                        <NavLink to="/" className="text-white fade-out hover:text-gray-300">Contact</NavLink>
                    </div>
                    <div className="flex items-center ml-4">
                        {hasImage ? (
                            <img
                                src="https://www.shutterstock.com/image-vector/auto-style-car-logo-design-600nw-573374866.jpg"
                                alt="profile"
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                        ) : (
                            <span className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 text-xl font-bold mr-4">
                                T
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation