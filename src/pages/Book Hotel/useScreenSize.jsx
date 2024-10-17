import { useState, useEffect } from "react";

function useScreenSize() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1025)

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1025);
        };
        window.addEventListener("resize", handleResize)

        handleResize();

        return () => window.removeEventListener("resize", handleResize);

    }, []);

    return isLargeScreen;
}

export default useScreenSize;