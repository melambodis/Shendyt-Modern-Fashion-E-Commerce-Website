import { useState, useEffect } from "react";
const useIsMobile = (maxWidth = 768) => {
    const [isMobile, setIsIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth <= maxWidth : false)

    useEffect(() => {
        const handleResize = () => {
            setIsIsMobile(window.innerWidth <= maxWidth)
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return ()=>{window.removeEventListener("resize", handleResize)};
    }, [maxWidth]);


    return isMobile
}

export default useIsMobile
